import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u3mlhdr2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h-2a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5c-.369 0-.369.631 0 1l6 6a1.414 1.414 0 0 0 2 0l6-6c.369-.369.369-1 0-1h-3a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1z");
}
</style><path class="u3mlhdr2j"/>`,
		"fallback": "coolicons:arrow-big-down-duocolor",
	});
}

export default Component;

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
		"content": `<style>.lcujul4wt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 20V9a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v5a3 3 0 0 1-3 3h-1c-1.28 0-2.36.36-3 1zm0 0V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v5a3 3 0 0 0 3 3h1c1.28 0 2.36.36 3 1z");
}
</style><path class="lcujul4wt"/>`,
		"fallback": "coolicons:book-open-round",
	});
}

export default Component;

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
		"content": `<style>.x93ocbbkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3H8c-.369 0-.369.631 0 1l3 3a1.414 1.414 0 0 0 2 0l3-3c.369-.369.369-1 0-1zm-7 9h2m4 0h2m4 0h2m-7 9H8c-.369 0-.369-.631 0-1l3-3a1.414 1.414 0 0 1 2 0l3 3c.369.369.369 1 0 1z");
}
</style><path class="x93ocbbkw"/>`,
		"fallback": "coolicons:flip-vertical",
	});
}

export default Component;

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
		"content": `<style>.s2vx1d0sg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5L9 9l4 6l2.5-3.5l6 8ZM15 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="s2vx1d0sg"/>`,
		"fallback": "uix-sharp:company-retreat",
	});
}

export default Component;

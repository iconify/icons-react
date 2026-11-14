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
		"content": `<style>.zmjis7byx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h17v2a3 3 0 0 1-3 3H15l2 3.5H7l2-3.5H8c-3 0-5-2-5.5-5m11.75-10h1A1.75 1.75 0 0 1 17 4.25v3.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-3.5a1.75 1.75 0 0 1 1.75-1.75m-9.75 7l8-3.75");
}
</style><path class="zmjis7byx"/>`,
		"fallback": "uix:forging",
	});
}

export default Component;

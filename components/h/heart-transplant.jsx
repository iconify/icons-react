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
		"content": `<style>.gtgxgk6bf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12.5h11A3.5 3.5 0 0 1 21 16v2a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18v-2a3.5 3.5 0 0 1 3.5-3.5m8-9l7 6m-10 2.5S7 9.25 7 6.5C7 5 8 4 9.5 4c.75 0 1.5.5 2 1.25C12 4.5 12.75 4 13.75 4C15 4 16 5 16 6.5c0 2.75-4.5 5.5-4.5 5.5M7 16.5h10");
}
</style><path class="gtgxgk6bf"/>`,
		"fallback": "uix:heart-transplant",
	});
}

export default Component;

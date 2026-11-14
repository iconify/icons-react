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
		"content": `<style>.t2svwn0ub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 3.5h13.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 18.75 7H5.25A1.75 1.75 0 0 1 3.5 5.25A1.75 1.75 0 0 1 5.25 3.5m3.124 6h7.252a2.625 2.625 0 0 1 2.614 2.863l-.523 5.75a2.625 2.625 0 0 1-2.614 2.387H8.897a2.625 2.625 0 0 1-2.614-2.387l-.523-5.75A2.625 2.625 0 0 1 8.374 9.5m1.626 3v5m4-5v5");
}
</style><path class="t2svwn0ub"/>`,
		"fallback": "uix:delete",
	});
}

export default Component;

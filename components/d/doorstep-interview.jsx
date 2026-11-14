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
		"content": `<style>.cffyqgbvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V5A1.5 1.5 0 0 1 4 3.5h4.5A1.5 1.5 0 0 1 10 5v16.5m4.75-8.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M13 21.5c0-2.25 1.75-3.5 4.25-3.5s4.25 1.25 4.25 3.5M7.25 13h.01M14.5 2.5H20A1.5 1.5 0 0 1 21.5 4v2A1.5 1.5 0 0 1 20 7.5h-4.5L13 9.25V4a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="cffyqgbvg"/>`,
		"fallback": "uix:doorstep-interview",
	});
}

export default Component;

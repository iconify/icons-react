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
		"content": `<style>.t9qs-_r_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h19M6 13.5a6 6 0 0 0 12 0m2.5 0v-6a3 3 0 0 0-6 0v2");
}
</style><path class="t9qs-_r_o"/>`,
		"fallback": "uix:countertop-basin",
	});
}

export default Component;

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
		"content": `<style>.i_0_ysuyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h19M5.875 3zA1.375 1.375 0 0 1 7.25 4.375v7.25A1.375 1.375 0 0 1 5.875 13A1.375 1.375 0 0 1 4.5 11.625v-7.25A1.375 1.375 0 0 1 5.875 3m12.25 0zA1.375 1.375 0 0 1 19.5 4.375v7.25A1.375 1.375 0 0 1 18.125 13a1.375 1.375 0 0 1-1.375-1.375v-7.25A1.375 1.375 0 0 1 18.125 3M14.75 18l2 2L21 15.75");
}
</style><path class="i_0_ysuyb"/>`,
		"fallback": "uix:good-lift",
	});
}

export default Component;

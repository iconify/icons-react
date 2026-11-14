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
		"content": `<style>.ruc-7_z3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20.5v-12c0-2.8 2.2-5 5-5s5 2.2 5 5V11l2-1.5c1-.75 2.4.1 2 1.5l-4 7v2.5Zm3-12h.01m3.99 0h.01M8 12.5h.01m3.99 0h.01M5 17h10");
}
</style><path class="ruc-7_z3l"/>`,
		"fallback": "uix:exfoliating-glove",
	});
}

export default Component;

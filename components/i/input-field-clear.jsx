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
		"content": `<style>.kdupw78rk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 6h10.25a4.375 4.375 0 0 1 4.375 4.375v3.25A4.375 4.375 0 0 1 17.125 18H6.875A4.375 4.375 0 0 1 2.5 13.625v-3.25A4.375 4.375 0 0 1 6.875 6M6 12h5.5m3.75-1.75l3.5 3.5m0-3.5l-3.5 3.5");
}
</style><path class="kdupw78rk"/>`,
		"fallback": "uix:input-field-clear",
	});
}

export default Component;

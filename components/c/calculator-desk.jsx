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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o4o9c3grx {
  d: path("M9.75 5.5h4.5A1.75 1.75 0 0 1 16 7.25v.5a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 7.75v-.5A1.75 1.75 0 0 1 9.75 5.5m-1.25 8h.01m3.49 0h.01m3.49 0h.01m-7.01 4h.01m3.49 0h.01m3.49 0h.01");
}

.o72zbacef {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5");
}
</style><g class="hntgybcog"><path class="o72zbacef"/><path class="o4o9c3grx"/></g>`,
		"fallback": "uix:calculator-desk",
	});
}

export default Component;

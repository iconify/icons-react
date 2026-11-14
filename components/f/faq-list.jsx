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

.o72zbacef {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5");
}

.x5iitkb8t {
  d: path("M7 5.5a1.25 1.25 0 1 1 1.25 1.25v.75m0 2h.01m3.24-3H16m-7.75 7h.01m3.24 0H16m-7.75 4h.01m3.24 0h3");
}
</style><g class="hntgybcog"><path class="o72zbacef"/><path class="x5iitkb8t"/></g>`,
		"fallback": "uix:faq-list",
	});
}

export default Component;

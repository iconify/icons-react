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
		"content": `<style>.cunfc5nqv {
  d: path("m5.016 12.923l10.24-7.17a3.25 3.25 0 0 1 4.526.798a3.25 3.25 0 0 1-.798 4.526l-10.24 7.17a3.25 3.25 0 0 1-4.526-.798a3.25 3.25 0 0 1 .798-4.526");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yrr29cb0r {
  d: path("m4.668 15.913l13.516-9.464a1.25 1.25 0 0 1 1.741.307a1.25 1.25 0 0 1-.307 1.741L6.102 17.961a1.25 1.25 0 0 1-1.741-.307a1.25 1.25 0 0 1 .307-1.741");
}
</style><g class="hntgybcog"><path class="cunfc5nqv"/><path class="yrr29cb0r"/></g>`,
		"fallback": "uix:hot-dog",
	});
}

export default Component;

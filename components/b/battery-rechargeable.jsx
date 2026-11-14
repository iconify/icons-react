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
		"content": `<style>.fx2afhbrd {
  d: path("m10.25 14.25l-1.75-1v2");
}

.mhxa_5fhj {
  d: path("M8.585 10.75a2.5 2.5 0 0 1 4.33 0");
}

.ub29l-bqr {
  d: path("M2.5 7H19v10H2.5Zm19 3.5v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytoduqagm {
  d: path("m11.25 9.75l1.75 1v-2m-.085 4.5a2.5 2.5 0 0 1-4.33 0");
}
</style><g class="ulnmmdpxh"><path class="ub29l-bqr"/><path class="mhxa_5fhj"/><path class="ytoduqagm"/><path class="fx2afhbrd"/></g>`,
		"fallback": "uix-sharp:battery-rechargeable",
	});
}

export default Component;

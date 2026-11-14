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

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.pl3lktb9y {
  d: path("M2.5 9.5h17M4 9.5l1.5 10h5.888m6.208-7.306L18 9.5m-11.5 0l2.75-6h3.5l2.75 6M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="pl3lktb9y"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:basket-total",
	});
}

export default Component;

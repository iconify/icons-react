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

.i0009mh6t {
  d: path("M5 6h15.5l-1.31 5.239M15.785 12H6m-1 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m9.75-2.25C19.5 15.5 18.9 15 18 15c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1M18 13.75V15m0 6v1");
}

.zg108tb0g {
  d: path("M2.5 3h2l2 11.5H13");
}
</style><g class="hntgybcog"><path class="zg108tb0g"/><path class="i0009mh6t"/></g>`,
		"fallback": "uix:cart-subtotal",
	});
}

export default Component;

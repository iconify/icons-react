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

.pl0jav50w {
  d: path("M10.121 9.879a3 3 0 0 1 0 4.242m2.475-5.978a6 6 0 0 1 0 7.714");
}

.vqmd3c2ve {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5M8 12h.01");
}
</style><g class="hntgybcog"><path class="vqmd3c2ve"/><path class="pl0jav50w"/></g>`,
		"fallback": "uix:contactless-payment",
	});
}

export default Component;

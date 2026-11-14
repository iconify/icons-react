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
		"content": `<style>.gc-tntbdd {
  d: path("M2.5 3.5h2L7 15m0 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m8 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M9.75 2.5h.5A1.75 1.75 0 0 1 12 4.25v1A1.75 1.75 0 0 1 10.25 7h-.5A1.75 1.75 0 0 1 8 5.25v-1A1.75 1.75 0 0 1 9.75 2.5M14 7q0-3.75 4.5-4.5C18.5 5 17 6.75 14 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pzkp4szco {
  d: path("M7.424 7h10.902a1.75 1.75 0 0 1 1.709 2.124l-.984 4.5A1.75 1.75 0 0 1 17.341 15H8.409a1.75 1.75 0 0 1-1.71-1.376l-.984-4.5A1.75 1.75 0 0 1 7.424 7");
}
</style><g class="hntgybcog"><path class="pzkp4szco"/><path class="gc-tntbdd"/></g>`,
		"fallback": "uix:grocery-cart-full",
	});
}

export default Component;

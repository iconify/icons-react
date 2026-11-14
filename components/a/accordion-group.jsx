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
		"content": `<style>.f6w5fk61k {
  d: path("m16 3.75l1 1l1-1M7 11.5h7M7 14h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ijvn1dbze {
  d: path("M5.875 2.5h12.25A1.875 1.875 0 0 1 20 4.375a1.875 1.875 0 0 1-1.875 1.875H5.875A1.875 1.875 0 0 1 4 4.375A1.875 1.875 0 0 1 5.875 2.5m.75 6.5h10.75A2.625 2.625 0 0 1 20 11.625v2.25a2.625 2.625 0 0 1-2.625 2.625H6.625A2.625 2.625 0 0 1 4 13.875v-2.25A2.625 2.625 0 0 1 6.625 9m-1.5 10.25h13.75A1.125 1.125 0 0 1 20 20.375a1.125 1.125 0 0 1-1.125 1.125H5.125A1.125 1.125 0 0 1 4 20.375a1.125 1.125 0 0 1 1.125-1.125");
}
</style><g class="hntgybcog"><path class="ijvn1dbze"/><path class="f6w5fk61k"/></g>`,
		"fallback": "uix:accordion-group",
	});
}

export default Component;

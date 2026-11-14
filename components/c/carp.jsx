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
		"content": `<style>.hbxo-khhv {
  d: path("M4.5 13c2.5-6 9.5-6 12 0L21 9v8l-4.5-4c-2.5 6-9.5 6-12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kh4k_3_sh {
  d: path("M7.5 9.5C9 5.5 12 5 15 10.25M4.5 13l-2 3m3.25-.75l-.5 3.25m2.5-6h.01");
}
</style><g class="hntgybcog"><path class="hbxo-khhv"/><path class="kh4k_3_sh"/></g>`,
		"fallback": "uix:carp",
	});
}

export default Component;

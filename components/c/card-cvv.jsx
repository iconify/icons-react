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

.pmm0gxjyk {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5M2.5 9.5h19M6 15h3");
}

.uyx7_eemm {
  d: path("M14.75 12.5h2a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 16.75 16h-2A1.75 1.75 0 0 1 13 14.25a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="pmm0gxjyk"/><path class="uyx7_eemm"/></g>`,
		"fallback": "uix:card-cvv",
	});
}

export default Component;

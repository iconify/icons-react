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

.p6ja0gd_l {
  d: path("M9.5 12h-3l-4 6h15l4-6h-7");
}

.rg79s_ggi {
  d: path("M11.25 6h1.5a1.75 1.75 0 0 1 1.75 1.75v5.5A1.75 1.75 0 0 1 12.75 15h-1.5a1.75 1.75 0 0 1-1.75-1.75v-5.5A1.75 1.75 0 0 1 11.25 6M9.5 9h5");
}
</style><g class="hntgybcog"><path class="p6ja0gd_l"/><path class="rg79s_ggi"/></g>`,
		"fallback": "uix:floor-plane",
	});
}

export default Component;

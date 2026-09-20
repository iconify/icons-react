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
		"content": `<style>.cjsg0ab2y {
  d: path("M2 20h20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m-p3hbclp {
  d: path("M4 15h16");
}

.v9il_wb-q {
  d: path("M6 10h12");
}

.y4k_22w_l {
  d: path("M8 5h8");
}
</style><g class="hntgybcog"><path class="y4k_22w_l"/><path class="v9il_wb-q"/><path class="m-p3hbclp"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:chart-pyramid-outline-thin",
	});
}

export default Component;

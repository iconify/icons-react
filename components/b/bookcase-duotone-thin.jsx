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
		"content": `<style>.bazq81bsf {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d3xn50bni {
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i00_u5bmc {
  d: path("M8 4v5");
}

.jof7c9fpk {
  d: path("M4 9h16");
}

.m-p3hbclp {
  d: path("M4 15h16");
}

.piffzybwc {
  d: path("M11 4v5");
}

.tv8fpliqa {
  d: path("M8 15v6");
}
</style><g class="hntgybcog"><path class="bazq81bsf"/><path class="d3xn50bni"/><path class="jof7c9fpk"/><path class="m-p3hbclp"/><path class="i00_u5bmc"/><path class="piffzybwc"/><path class="tv8fpliqa"/></g>`,
		"fallback": "iconmind:bookcase-duotone-thin",
	});
}

export default Component;

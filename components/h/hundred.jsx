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
		"content": `<style>.g6q7tne_l {
  width: 4.5px;
  height: 10px;
  x: 15.5px;
  y: 6px;
  rx: 2.25px;
}

.g7hx3wb5d {
  d: path("M3.5 7.25L5.5 6v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qnel0xb2j {
  d: path("M3.5 18.75h17M6 21.25h12");
}

.z3ecezk3k {
  width: 4.5px;
  height: 10px;
  x: 8.5px;
  y: 6px;
  rx: 2.25px;
}
</style><g class="hntgybcog"><path class="g7hx3wb5d"/><rect class="z3ecezk3k"/><rect class="g6q7tne_l"/><path class="qnel0xb2j"/></g>`,
		"fallback": "iconoven:hundred",
	});
}

export default Component;

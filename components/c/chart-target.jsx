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
		"content": `<style>.cyk7jm02b {
  d: path("M6.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.dmn0ui_hy {
  d: path("M10.5 10a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.fsbyttsma {
  d: path("m2.5 21.5l3-5.5L8 19l6-9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oxxnebbjv {
  fill: currentColor;
  d: path("M14 10h.01");
}
</style><g class="hntgybcog"><path class="cyk7jm02b"/><path class="dmn0ui_hy"/><path class="oxxnebbjv"/><path class="fsbyttsma"/></g>`,
		"fallback": "uix:chart-target",
	});
}

export default Component;

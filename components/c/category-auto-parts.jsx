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

.nwrftd82o {
  d: path("M5.5 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.vwl52ubwq {
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.x9z3htbyn {
  fill: currentColor;
  d: path("M8.25 9a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m6 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m-6 6a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m6 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="nwrftd82o"/><path class="vwl52ubwq"/><path class="x9z3htbyn"/></g>`,
		"fallback": "uix:category-auto-parts",
	});
}

export default Component;

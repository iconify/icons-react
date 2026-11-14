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
		"content": `<style>.hdsxo9pqp {
  d: path("M11.75 9.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-5 5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j0dxzpbis {
  d: path("M6.75 9.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.ng-gcyb9x {
  d: path("M11.75 14.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="j0dxzpbis"/><path class="hdsxo9pqp"/><path class="ng-gcyb9x"/></g>`,
		"fallback": "uix:embryo",
	});
}

export default Component;

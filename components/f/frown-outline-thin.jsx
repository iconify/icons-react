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
		"content": `<style>.a97qfmbix {
  d: path("M14 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.c4o3x9bhp {
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.r49217b4z {
  d: path("M8.24 19.63a4 4 0 0 1 7.5 0");
}
</style><g class="hntgybcog"><path class="o_ssmh9ez"/><path class="c4o3x9bhp"/><path class="a97qfmbix"/><path class="r49217b4z"/></g>`,
		"fallback": "iconmind:frown-outline-thin",
	});
}

export default Component;

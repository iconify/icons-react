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

.m2ts5uf9u {
  d: path("M15.25 18.75C19 19.5 21 16.5 20 13.5c-.5-1.25-1.75-1-2 .25");
}

.pynucbvdw {
  d: path("M5.5 9c0-3 2-4.5 4.5-4.5a2.25 2.25 0 1 1 3.75 2c1.75 1.5 2.75 4.5 2.75 8s-2 6-5 6h-4c1-3.5 1.25-7 1-8.5c-1.5-.5-3-1.5-3-3m3-1.25h.01");
}
</style><g class="hntgybcog"><path class="pynucbvdw"/><path class="m2ts5uf9u"/></g>`,
		"fallback": "uix:gerbil",
	});
}

export default Component;

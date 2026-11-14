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

.kaluqhbqc {
  d: path("m3 21l11-11m0 0c-1.5-3.5 0-6.5 3.25-7.5C18 6 17 8.5 14 10");
}

.m906kjbdw {
  d: path("M14 10c2-3 5-3.75 7.5-3c-1.25 3.25-4 4.5-7.5 3");
}
</style><g class="hntgybcog"><path class="kaluqhbqc"/><path class="m906kjbdw"/></g>`,
		"fallback": "uix:cat-wand",
	});
}

export default Component;

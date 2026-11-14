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
		"content": `<style>.a9r51ybmm {
  d: path("M2.5 13C4 16.5 8 17.5 12 17.5s8-1 9.5-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m9ap1z2di {
  d: path("m7.75 17l.5-8.5C8.5 6.5 10 6 11 7l1 1l1-1c1-1 2.5-.5 2.75 1.5l.5 8.5");
}
</style><g class="hntgybcog"><path class="a9r51ybmm"/><path class="m9ap1z2di"/></g>`,
		"fallback": "uix:genre-country",
	});
}

export default Component;

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
		"content": `<style>.b1nthabki {
  d: path("M8 7h8v3.5l3 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20v-8l3-1.5Zm0 0a4 4 0 0 1 8 0M5 12l-2.5 2.5M19 12l2.5 2.5");
}

.h_02b9bat {
  d: path("M10.75 15h2.5A1.75 1.75 0 0 1 15 16.75a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 16.75A1.75 1.75 0 0 1 10.75 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b1nthabki"/><path class="h_02b9bat"/></g>`,
		"fallback": "uix:barista-apron",
	});
}

export default Component;

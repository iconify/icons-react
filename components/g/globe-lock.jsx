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
		"content": `<style>.f1hp4dbun {
  d: path("M8 12c0-3.8 1.8-7.2 4-9.5c2.2 2.3 4 5.7 4 9.5m.75 5h2.5A1.75 1.75 0 0 1 21 18.75v1a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-1A1.75 1.75 0 0 1 16.75 17m-.5 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l36ulg-8v {
  d: path("M21.5 12h-7.25a2 2 0 0 0-2 2v7.5A9.5 9.5 0 1 1 21.5 12m-19 0h9.75");
}
</style><g class="hntgybcog"><path class="l36ulg-8v"/><path class="f1hp4dbun"/></g>`,
		"fallback": "uix:globe-lock",
	});
}

export default Component;

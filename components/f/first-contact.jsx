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
		"content": `<style>.e2thpc68u {
  d: path("M3 11a9 3 0 1 0 18 0a9 3 0 1 0-18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.omo0fdcrs {
  d: path("M7.5 8.5a4.5 4.5 0 0 1 9 0M4 20h16");
}
</style><g class="hntgybcog"><path class="e2thpc68u"/><path class="omo0fdcrs"/></g>`,
		"fallback": "uix:first-contact",
	});
}

export default Component;

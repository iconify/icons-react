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
		"content": `<style>.f1v-4dvyv {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6 5v11.5M10 5v11.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wm2hddc6n {
  d: path("M4.25 5h8.5a1.75 1.75 0 0 1 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-8.5a1.75 1.75 0 0 1-1.75-1.75v-8A1.75 1.75 0 0 1 4.25 5M14.5 8.5h4l3 3.5v4.5h-7");
}
</style><g class="hntgybcog"><path class="wm2hddc6n"/><path class="f1v-4dvyv"/></g>`,
		"fallback": "uix:curtain-side-truck",
	});
}

export default Component;

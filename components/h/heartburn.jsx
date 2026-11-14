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
		"content": `<style>.g5ympcw9t {
  d: path("M11 7.5c2-1.5 8.5-1.5 8.5 5c0 5-4 8-8.5 8c-4 0-6.5-2.5-6.5-5.5c0-1.5 1-2.5 2.5-2.5c2 0 2-2.5 2-3.5Zm-1-5v5.75");
}

.hf-d_gnzw {
  fill: currentColor;
  d: path("M14 10.5c1.75 1.5 2.5 2.75 2.5 4c0 1.5-1.25 2.5-2.5 2.5s-2.5-1-2.5-2.5c0-.75.5-1.5 1-1.75c0 .75.5 1.25 1 1.25c0-1.25-.25-2.25.5-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g5ympcw9t"/><path class="hf-d_gnzw"/></g>`,
		"fallback": "uix:heartburn",
	});
}

export default Component;

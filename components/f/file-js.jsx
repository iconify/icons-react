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

.tuq82lbhh {
  d: path("M4.5 12V5A2.5 2.5 0 0 1 7 2.5h6.5l6 6V12");
}

.y_0ry_bsf {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8 15.5h2.5v3.75a2.25 2.25 0 0 1-4.5 0m12.25-3c-.5-.75-4.5-1-4.5.75c0 2 4.75.75 4.75 2.75s-4.25 2-5 .75");
}
</style><g class="hntgybcog"><path class="tuq82lbhh"/><path class="y_0ry_bsf"/></g>`,
		"fallback": "uix:file-js",
	});
}

export default Component;

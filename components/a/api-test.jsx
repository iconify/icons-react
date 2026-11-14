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

.lfj2l3myg {
  d: path("M10 6.5v4l-3.25 6A1 1 0 0 0 7.5 18h9a1 1 0 0 0 .75-1.5l-3.25-6v-4m-5 0h6");
}

.u-s9u8vws {
  d: path("M7.75 2.5h8.5a5.25 5.25 0 0 1 5.25 5.25v8.5a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25v-8.5A5.25 5.25 0 0 1 7.75 2.5");
}
</style><g class="hntgybcog"><path class="u-s9u8vws"/><path class="lfj2l3myg"/></g>`,
		"fallback": "uix:api-test",
	});
}

export default Component;

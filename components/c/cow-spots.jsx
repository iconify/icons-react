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
		"content": `<style>.em1manbnn {
  d: path("M11 7.5h6.5A3.5 3.5 0 0 1 21 11v1a3.5 3.5 0 0 1-3.5 3.5H11A3.5 3.5 0 0 1 7.5 12v-1A3.5 3.5 0 0 1 11 7.5M7.5 9H4c-1 0-1.5.75-1.5 1.75v1.5c0 1 .75 1.5 1.75 1.25l3.25-1M4.75 9L4 6m5.75 9.5v4m9-4v4");
}

.f47tdgiok {
  d: path("M11 7.5c0 2.5 1 3.5 2.25 3.5s2.25-1 2.25-3.5Zm4 8c0-2 1-2.75 2.25-2.75s2 1 2 2.75Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="em1manbnn"/><path class="f47tdgiok"/></g>`,
		"fallback": "uix:cow-spots",
	});
}

export default Component;

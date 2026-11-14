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
		"content": `<style>.c7rk0uhzz {
  d: path("M10.5 10.75L7.75 14.5H11l-2.75 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.smdtqhp8e {
  d: path("M6 8h6.5a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17v-5.5A3.5 3.5 0 0 1 6 8m-.5 0V4.5h5V8M13 8V3.5h2.5M16 14h2.5c1 0 1.75.75 1.75 2v1m-.125 0za1.375 1.375 0 0 1 1.375 1.375v.25A1.375 1.375 0 0 1 20.125 20a1.375 1.375 0 0 1-1.375-1.375v-.25A1.375 1.375 0 0 1 20.125 17");
}
</style><g class="hntgybcog"><path class="smdtqhp8e"/><path class="c7rk0uhzz"/></g>`,
		"fallback": "uix:generator-event",
	});
}

export default Component;

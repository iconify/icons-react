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
		"content": `<style>.adgv6acea {
  d: path("M9 7.5C5 10 3.5 15 4.5 19.5q.5 2 2.5 2h10q2 0 2.5-2c1-4.5-.5-9.5-4.5-12m-6 0L7 3h10l-2 4.5m-7 0h8");
}

.bpjgn478b {
  d: path("M9.25 12h5.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-5.5a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 9.25 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="adgv6acea"/><path class="bpjgn478b"/></g>`,
		"fallback": "uix:fertiliser-bag",
	});
}

export default Component;

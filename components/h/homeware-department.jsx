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

.ih3rvlbwc {
  d: path("m10.96 10.3l1.5 1.25a1.5 1.5 0 0 1 .54 1.153V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7 14.5v-1.797a1.5 1.5 0 0 1 .54-1.153l1.5-1.25a1.5 1.5 0 0 1 1.92 0M10 16v-2.25");
}

.n_331fboj {
  d: path("M4 5.5h12v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4ZM16 9h1.5a3 3 0 0 1 0 6H16");
}
</style><g class="hntgybcog"><path class="n_331fboj"/><path class="ih3rvlbwc"/></g>`,
		"fallback": "uix:homeware-department",
	});
}

export default Component;

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
		"content": `<style>.gvbdkgs4t {
  d: path("M7 3h10a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 17 17H7a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 7 3m0 14l-1 4m11-4l1 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pq_n7bc5t {
  d: path("M8.5 7.75c0 2.25.5 3.5 3 3.5H14c1.25 0 2 .75 2 3");
}

.qsihyuxvu {
  d: path("M3.5 7.5c2.5-1 4.5 1 7 0s5 .75 10 0");
}
</style><g class="hntgybcog"><path class="gvbdkgs4t"/><path class="qsihyuxvu"/><path class="pq_n7bc5t"/></g>`,
		"fallback": "uix:ant-farm",
	});
}

export default Component;

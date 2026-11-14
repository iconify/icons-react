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

.j6rssnbec {
  d: path("M7.5 9.5a6.5 7.5 0 1 0 13 0a6.5 7.5 0 1 0-13 0");
}

.n_oxb1bkx {
  d: path("M8.873 14.627za1.75 1.75 0 0 1 0 2.474l-1.944 1.945a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475l1.945-1.944a1.75 1.75 0 0 1 2.474 0M11 10l3.5-3.5");
}
</style><g class="hntgybcog"><path class="j6rssnbec"/><path class="n_oxb1bkx"/></g>`,
		"fallback": "uix:hand-mirror",
	});
}

export default Component;

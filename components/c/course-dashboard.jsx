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

.nncqgxrpf {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5m-3.5 5h19");
}

.vq28wbc9s {
  d: path("M7.5 12H9a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 9 17H7.5A1.5 1.5 0 0 1 6 15.5v-2A1.5 1.5 0 0 1 7.5 12m6.5 3v2m3-4.5V17");
}
</style><g class="hntgybcog"><path class="nncqgxrpf"/><path class="vq28wbc9s"/></g>`,
		"fallback": "uix:course-dashboard",
	});
}

export default Component;

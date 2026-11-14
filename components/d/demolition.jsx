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

.kr-izc7tx {
  d: path("M14.25 6h5.5a1.75 1.75 0 0 1 1.75 1.75v12a1.75 1.75 0 0 1-1.75 1.75h-5.5a1.75 1.75 0 0 1-1.75-1.75v-12A1.75 1.75 0 0 1 14.25 6M3.5 14.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m.5-12l2.5 9");
}

.qojv_-bmk {
  d: path("m17 6l-1.25 4L18 13l-1.5 3");
}
</style><g class="hntgybcog"><path class="kr-izc7tx"/><path class="qojv_-bmk"/></g>`,
		"fallback": "uix:demolition",
	});
}

export default Component;

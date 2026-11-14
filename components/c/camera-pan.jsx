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

.qju0ib_ml {
  d: path("M5.125 4h6.75A2.625 2.625 0 0 1 14.5 6.625v3.25a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 2.5 9.875v-3.25A2.625 2.625 0 0 1 5.125 4");
}

.tijiu1b3a {
  d: path("m15.384 6.602l2-.9A1.5 1.5 0 0 1 19.5 7.07v2.36a1.5 1.5 0 0 1-2.116 1.368l-2-.9A1.5 1.5 0 0 1 14.5 8.53v-.56a1.5 1.5 0 0 1 .884-1.368M8.5 12.5v4m-4 4l4-4l4 4m4.5-3.75l-1.75 1.75L17 20.25m-1.75-1.75h6.5M20 16.75l1.75 1.75L20 20.25");
}
</style><g class="hntgybcog"><path class="qju0ib_ml"/><path class="tijiu1b3a"/></g>`,
		"fallback": "uix:camera-pan",
	});
}

export default Component;

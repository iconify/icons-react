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
		"content": `<style>.h_qua6jtb {
  d: path("M4.5 9h15l-2 12h-11Zm0 0c0-7.5 15-7.5 15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yp3l3bcdt {
  d: path("M5.5 15q2.25-1.75 4.5 0t4.25 0q2.25-1.75 4.25 0");
}
</style><g class="hntgybcog"><path class="h_qua6jtb"/><path class="yp3l3bcdt"/></g>`,
		"fallback": "uix:bucket-farm",
	});
}

export default Component;

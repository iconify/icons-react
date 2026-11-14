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

.jefgrcc3u {
  d: path("m14.475 4.725l4.8 4.8a3.5 3.5 0 0 1 0 4.95l-4.8 4.8a3.5 3.5 0 0 1-4.95 0l-4.8-4.8a3.5 3.5 0 0 1 0-4.95l4.8-4.8a3.5 3.5 0 0 1 4.95 0");
}

.zla5xc92p {
  d: path("M14.5 9.5c0-1.25-1.25-1.75-2.5-1.75c-1.5 0-2.5.75-2.5 2c0 2.75 5 1.75 5 4.5c0 1.25-1 2-2.5 2c-1.25 0-2.5-.5-2.5-1.75m2.5-8v11");
}
</style><g class="hntgybcog"><path class="jefgrcc3u"/><path class="zla5xc92p"/></g>`,
		"fallback": "uix:congestion-charge-zone",
	});
}

export default Component;

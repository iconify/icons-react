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

.lvu0hsbvo {
  d: path("M6.5 14a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.qxz2mbbpi {
  d: path("m8.5 10l-2-7.5h4L12 7m3.5 3l2-7.5h-4L12 7m0 10s-2.75-1.75-2.75-3.5c0-1 .75-1.5 1.5-1.5c.5 0 1 .25 1.25.75c.25-.5.75-.75 1.25-.75c.75 0 1.5.5 1.5 1.5C14.75 15.25 12 17 12 17");
}
</style><g class="hntgybcog"><path class="lvu0hsbvo"/><path class="qxz2mbbpi"/></g>`,
		"fallback": "uix:health-wellness-reward",
	});
}

export default Component;

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

.phz0fdbyf {
  d: path("M7.25 21.5V18c-2.25-1.5-3-3.5-3-5.75c0-3.75 2.75-6.5 6.5-6.5C14 5.75 16.5 8 16.5 11.5l1.5 3q0 .75-.75.75h-.75v2c0 1-.75 1.75-1.5 1.75h-1.75v2.5M12.75 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.yy62poa0v {
  d: path("M16.25 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0h2m-7.25 6.75h.01");
}
</style><g class="hntgybcog"><path class="phz0fdbyf"/><path class="yy62poa0v"/></g>`,
		"fallback": "uix:brain-stimulation",
	});
}

export default Component;

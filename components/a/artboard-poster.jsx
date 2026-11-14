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

.pr56_6bjn {
  d: path("M8.625 5.25h6.75A2.625 2.625 0 0 1 18 7.875v10.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 6 18.625V7.875A2.625 2.625 0 0 1 8.625 5.25M6 2.5h5");
}

.q9yjrr-zc {
  d: path("M9.5 11a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9 17h6");
}
</style><g class="hntgybcog"><path class="pr56_6bjn"/><path class="q9yjrr-zc"/></g>`,
		"fallback": "uix:artboard-poster",
	});
}

export default Component;

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
		"content": `<style>.cmvr_w51t {
  d: path("M2.5 9C4 5.25 6.6 3 9.75 3S15.5 5.25 17 9c-1.5 3.75-4.1 6-7.25 6S4 12.75 2.5 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rqt4nqb8n {
  d: path("M6.75 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0M19 14.5a4 4 0 0 1 0 7a4 4 0 0 1 0-7M15.5 18h6");
}
</style><g class="hntgybcog"><path class="cmvr_w51t"/><path class="rqt4nqb8n"/></g>`,
		"fallback": "uix:eye-optics",
	});
}

export default Component;

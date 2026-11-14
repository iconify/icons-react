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
		"content": `<style>.qqqsxcb-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21h4l1.5-4.5l-2.5-2C9.25 12 12 9.25 14.5 8l2 2.5L21 9V5a2 2 0 0 0-2-2C10 3 3 10 3 19a2 2 0 0 0 2 2m13-3c-.75-2.5-3.5-2.5-3.5 0s2.75 2.5 3.5 0s3.5-2.5 3.5 0s-2.75 2.5-3.5 0");
}
</style><path class="qqqsxcb-l"/>`,
		"fallback": "uix:call-unlimited",
	});
}

export default Component;

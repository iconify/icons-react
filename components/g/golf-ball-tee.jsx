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
		"content": `<style>.aqvxqjbcn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8a6 6 0 1 0 12 0A6 6 0 1 0 6 8m1.5 9h9L13 19v2.5h-2V19ZM10 6.75h.01m3.74 2.5h.01");
}
</style><path class="aqvxqjbcn"/>`,
		"fallback": "uix:golf-ball-tee",
	});
}

export default Component;

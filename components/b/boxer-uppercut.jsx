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
		"content": `<style>.exen12bvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 2.5za4.75 4.75 0 0 1 4.75 4.75v3.5a4.75 4.75 0 0 1-4.75 4.75A4.75 4.75 0 0 1 5 10.75v-3.5A4.75 4.75 0 0 1 9.75 2.5M5 8.5A2.25 2.25 0 0 0 5 13m2.75 2.5h4a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-4A1.75 1.75 0 0 1 6 19.75v-2.5a1.75 1.75 0 0 1 1.75-1.75M19.5 20V4m-2.25 2.25L19.5 4l2.25 2.25");
}
</style><path class="exen12bvf"/>`,
		"fallback": "uix:boxer-uppercut",
	});
}

export default Component;

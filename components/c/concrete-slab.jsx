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
		"content": `<style>.mmjq0fbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 9h13.75a2.625 2.625 0 0 1 2.625 2.625v4.75A2.625 2.625 0 0 1 18.875 19H5.125A2.625 2.625 0 0 1 2.5 16.375v-4.75A2.625 2.625 0 0 1 5.125 9M5.5 9V7.5a2 2 0 0 1 4 0V9m5 0V7.5a2 2 0 0 1 4 0V9");
}
</style><path class="mmjq0fbhp"/>`,
		"fallback": "uix:concrete-slab",
	});
}

export default Component;

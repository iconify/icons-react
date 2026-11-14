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
		"content": `<style>.m5bvly0-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5.5 6.75h19m-17 0v6.25a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6.25m-7.5-8v2.5");
}
</style><path class="m5bvly0-k"/>`,
		"fallback": "uix:donation",
	});
}

export default Component;

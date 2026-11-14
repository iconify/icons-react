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
		"content": `<style>.hzb09q-4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 5.5zA2.25 2.25 0 0 1 8 7.75v8.5a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25v-8.5A2.25 2.25 0 0 1 5.75 5.5m12.5 0za2.25 2.25 0 0 1 2.25 2.25v8.5a2.25 2.25 0 0 1-2.25 2.25A2.25 2.25 0 0 1 16 16.25v-8.5a2.25 2.25 0 0 1 2.25-2.25M8 12h8");
}
</style><path class="hzb09q-4n"/>`,
		"fallback": "uix:dumbbell",
	});
}

export default Component;

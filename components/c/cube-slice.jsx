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
		"content": `<style>.mmkxj_0vk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.25 2.932l5 2.885A1.5 1.5 0 0 1 20 7.116v6.018a1.5 1.5 0 0 1-.75 1.299l-3.5 2.019a1.5 1.5 0 0 1-2.25-1.299v-4.287a1.5 1.5 0 0 0-.75-1.299L9.252 7.549a1.5 1.5 0 0 1 0-2.598l3.498-2.019a1.5 1.5 0 0 1 1.5 0M13.5 10L20 6.25M6 9.298l3.5 2.019a1.5 1.5 0 0 1 .75 1.299v4.287A1.5 1.5 0 0 1 8 18.202l-3.5-2.019a1.5 1.5 0 0 1-.75-1.299v-4.287A1.5 1.5 0 0 1 6 9.298");
}
</style><path class="mmkxj_0vk"/>`,
		"fallback": "uix:cube-slice",
	});
}

export default Component;

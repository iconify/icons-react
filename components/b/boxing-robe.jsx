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
		"content": `<style>.ljddvif1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5L12 9l3-5.5l4.5 2l2 6.5l-4 .5V21h-11v-8.5l-4-.5l2-6.5ZM12 9v12m-5.5-6.5h11");
}
</style><path class="ljddvif1b"/>`,
		"fallback": "uix:boxing-robe",
	});
}

export default Component;

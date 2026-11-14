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
		"content": `<style>.jl7_yuyvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5L12 5.75l3.5-3.25M4 11a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 11v4.5a2.5 2.5 0 0 1-2.5 2.5H11l-3.5 3v-3h-1A2.5 2.5 0 0 1 4 15.5Zm4 2.25h8");
}
</style><path class="jl7_yuyvb"/>`,
		"fallback": "uix:comment-expand",
	});
}

export default Component;

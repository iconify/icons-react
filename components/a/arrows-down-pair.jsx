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
		"content": `<style>.uzy2aj9vb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.5 4v16m3-3l-3 3l-3-3m-8-13v16m3-3l-3 3l-3-3");
}
</style><path class="uzy2aj9vb"/>`,
		"fallback": "uix:arrows-down-pair",
	});
}

export default Component;

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
		"content": `<style>.ubp74qbgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20.132 3.868l-1.768 1.768m-.53-.53l1.06 1.06a1.5 1.5 0 0 1 0 2.122l-7.55 7.55a1.5 1.5 0 0 0-.342.529l-1.008 2.656a1.5 1.5 0 0 1-2.463.529l-3.083-3.083a1.5 1.5 0 0 1 .529-2.463l2.656-1.008a1.5 1.5 0 0 0 .529-.342l7.55-7.55a1.5 1.5 0 0 1 2.122 0m-1.945 3.005h.01m-2.131 2.121h.01m-2.132 2.122h.01");
}
</style><path class="ubp74qbgi"/>`,
		"fallback": "uix:duduk",
	});
}

export default Component;

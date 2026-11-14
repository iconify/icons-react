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
		"content": `<style>.il8yb-b8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l8.5 4.5L12 12L3.5 7.5Zm-8.5 9.5L12 17l1.133-.6m5.657-2.994l1.71-.906m-4.75 3H17l4.25 6m-2.75-3.25l-2.75 3.25");
}
</style><path class="il8yb-b8d"/>`,
		"fallback": "uix:function-layer",
	});
}

export default Component;

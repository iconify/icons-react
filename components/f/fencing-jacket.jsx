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
		"content": `<style>.b_8d8xb-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6v2.75l4.5 1.25L21 13l-2.5.5v8h-13v-8L3 13l1.5-6.5L9 5.25Zm0 2.75h6m-1 0L9 21.5");
}
</style><path class="b_8d8xb-c"/>`,
		"fallback": "uix:fencing-jacket",
	});
}

export default Component;

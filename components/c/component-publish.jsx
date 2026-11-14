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
		"content": `<style>.rt_on9c0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.356 4.356l4.288 4.288a2.625 2.625 0 0 1 0 3.712l-4.288 4.288a2.625 2.625 0 0 1-3.712 0l-4.288-4.288a2.625 2.625 0 0 1 0-3.712l4.288-4.288a2.625 2.625 0 0 1 3.712 0M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="rt_on9c0d"/>`,
		"fallback": "uix:component-publish",
	});
}

export default Component;

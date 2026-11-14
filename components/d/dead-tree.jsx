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
		"content": `<style>.psib2-b7r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.25 21.5l1-9.5L6.5 8L6 3.5m8.75 18l-1-9.5L16 7l4-2.5M16 7l-.5-4m-1.25 13.5l2.75-2m-11.5 7h13");
}
</style><path class="psib2-b7r"/>`,
		"fallback": "uix:dead-tree",
	});
}

export default Component;

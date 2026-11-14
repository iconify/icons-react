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
		"content": `<style>.nobjv2b6w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.5L9 15l4.5-4L20 5M9 15L4.5 9m9 2l-2-7.5M16.75 8l-.25-5M6 21.5h4");
}
</style><path class="nobjv2b6w"/>`,
		"fallback": "uix:antler",
	});
}

export default Component;

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
		"content": `<style>.z35q4xs_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5h6a3.5 3.5 0 0 1 3.5 3.5v9A3.5 3.5 0 0 1 15 21H9a3.5 3.5 0 0 1-3.5-3.5v-9A3.5 3.5 0 0 1 9 5M8 5V3h3v2m-5.5 5.5h13m-13 5h13");
}
</style><path class="z35q4xs_o"/>`,
		"fallback": "uix:commodity-oil",
	});
}

export default Component;

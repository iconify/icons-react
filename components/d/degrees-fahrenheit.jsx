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
		"content": `<style>.hmppan-ax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m9 14v-15h7m-7 7H18");
}
</style><path class="hmppan-ax"/>`,
		"fallback": "uix:degrees-fahrenheit",
	});
}

export default Component;

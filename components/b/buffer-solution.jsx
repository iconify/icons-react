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
		"content": `<style>.qu7k5gbyx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h2v15.5A2.5 2.5 0 0 0 9 21h6a2.5 2.5 0 0 0 2.5-2.5V3h2m-13 9h11");
}
</style><path class="qu7k5gbyx"/>`,
		"fallback": "uix:buffer-solution",
	});
}

export default Component;

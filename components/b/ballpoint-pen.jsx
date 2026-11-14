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
		"content": `<style>.v25vjubpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.364 5.636za2.5 2.5 0 0 1 0 3.536L12 15.536a2.5 2.5 0 0 1-3.536 0a2.5 2.5 0 0 1 0-3.536l6.364-6.364a2.5 2.5 0 0 1 3.536 0M5.5 18.5L4 20");
}
</style><path class="v25vjubpw"/>`,
		"fallback": "uix:ballpoint-pen",
	});
}

export default Component;

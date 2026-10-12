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
		"content": `<style>.vyssel6iv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 11V9a4 4 0 0 1 8 0v2Zm.25-2.25h7.5M2.75 17c0-2 4.25-3.5 9.25-3.5s9.25 1.5 9.25 3.5c0 .6-.6.9-1.15.65c-2.35-1.05-5.1-1.4-8.1-1.4s-5.75.35-8.1 1.4c-.55.25-1.15-.05-1.15-.65");
}
</style><path class="vyssel6iv"/>`,
		"fallback": "iconoven:avatar-sun-hat",
	});
}

export default Component;

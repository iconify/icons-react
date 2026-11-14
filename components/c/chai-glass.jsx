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
		"content": `<style>.ve4u52blu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.896 8h6.208a1.75 1.75 0 0 1 1.745 1.89l-.72 9a1.75 1.75 0 0 1-1.745 1.61H9.616a1.75 1.75 0 0 1-1.745-1.61l-.72-9A1.75 1.75 0 0 1 8.896 8M7.25 11h9.5M10 5.25c-.75-.75.75-1.75 0-2.75m4 2.75c-.75-.75.75-1.75 0-2.75");
}
</style><path class="ve4u52blu"/>`,
		"fallback": "uix:chai-glass",
	});
}

export default Component;

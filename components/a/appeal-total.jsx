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
		"content": `<style>.a-zyg6b0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2M7 8h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2a2 2 0 0 1 2-2m2 4h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-5 8h16");
}
</style><path class="a-zyg6b0q"/>`,
		"fallback": "uix:appeal-total",
	});
}

export default Component;

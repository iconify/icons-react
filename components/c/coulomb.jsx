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
		"content": `<style>.y22kbbbuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 8.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0m11.5 0a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0m-8.75 0h3M6.25 7v3m10-1.5h3M3 17.5h7m-2-2l2 2l-2 2m13-2h-7m2-2l-2 2l2 2");
}
</style><path class="y22kbbbuy"/>`,
		"fallback": "uix:coulomb",
	});
}

export default Component;

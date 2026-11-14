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
		"content": `<style>.ecdrjes7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M2.5 21c0-4 3-7 7-7c.606 0 1.189.069 1.742.199M15.75 13h4a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-4A1.75 1.75 0 0 1 14 19.75v-5A1.75 1.75 0 0 1 15.75 13m.5 2.75h3m-3 3h.01m2.99 0h.01");
}
</style><path class="ecdrjes7q"/>`,
		"fallback": "uix:accountant",
	});
}

export default Component;

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
		"content": `<style>.d6uf4313g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.5 3.5L13 16v2.25a2.25 2.25 0 0 1-2.25 2.25h-5a2.25 2.25 0 0 1 0-4.5H13m-5.25 0v4.5M10.5 16v4.5");
}
</style><path class="d6uf4313g"/>`,
		"fallback": "uix:hockey-stick-tape",
	});
}

export default Component;

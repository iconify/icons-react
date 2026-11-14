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
		"content": `<style>.cr3703bcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6h16.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25H3.75A1.25 1.25 0 0 1 2.5 7.25A1.25 1.25 0 0 1 3.75 6M4 8.5v13m16-13v13m-12.75-8a2 1 0 1 0 4 0a2 1 0 1 0-4 0m2 1v7m-1.5 0h3m2-8a2 1 0 1 0 4 0a2 1 0 1 0-4 0m2 1v7m-1.5 0h3");
}
</style><path class="cr3703bcg"/>`,
		"fallback": "uix:breakfast-bar",
	});
}

export default Component;

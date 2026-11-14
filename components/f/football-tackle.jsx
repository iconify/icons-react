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
		"content": `<style>.c51hy_b3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm12 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM3 21.5l4-8l5-1.5m9 9.5l-4-8l-5-1.5m-2.5 9c0-3 2-5 5-5c0 3-2 5-5 5Z");
}
</style><path class="c51hy_b3t"/>`,
		"fallback": "uix-sharp:football-tackle",
	});
}

export default Component;

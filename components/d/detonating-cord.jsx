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
		"content": `<style>.yx2gjve8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h11m5 0h3m-3.75 1.75L20 16m-4-1.5v3m-1.75-3.75L12 16m2.25-5.75L12 8m4 1.5v-3m1.75 3.75L20 8");
}
</style><path class="yx2gjve8y"/>`,
		"fallback": "uix:detonating-cord",
	});
}

export default Component;

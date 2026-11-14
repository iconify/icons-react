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
		"content": `<style>.dt0dxcvqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5h18v14H3Zm9 3.5v7m3.031-5.25l-6.062 3.5m6.062 0l-6.062-3.5");
}
</style><path class="dt0dxcvqd"/>`,
		"fallback": "uix-sharp:frozen-food-box",
	});
}

export default Component;

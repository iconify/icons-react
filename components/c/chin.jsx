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
		"content": `<style>.tnui3acul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.5v-4c-3-1.5-4.5-4.25-4.5-7c0-4.5 3.5-7.75 8-7.75c4 0 6.5 2.75 6.5 6.25l1.75 3.25H18v2q0 .236-.054.434M16.5 17.5l5 4.5m-5-1v-3.5H20");
}
</style><path class="tnui3acul"/>`,
		"fallback": "uix-sharp:chin",
	});
}

export default Component;

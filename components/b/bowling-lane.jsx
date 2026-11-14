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
		"content": `<style>.s2vcmrb1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 21.5l4-19m15 19l-4-19M7.25 14l1.25-1.5L9.75 14m1-4.5L12 8l1.25 1.5m1 4.5l1.25-1.5l1.25 1.5");
}
</style><path class="s2vcmrb1x"/>`,
		"fallback": "uix-sharp:bowling-lane",
	});
}

export default Component;

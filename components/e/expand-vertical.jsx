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
		"content": `<style>.n7_mv1b-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20 12H4m11.5-3.5L12 5L8.5 8.5m7 7L12 19l-3.5-3.5");
}
</style><path class="n7_mv1b-x"/>`,
		"fallback": "uix-sharp:expand-vertical",
	});
}

export default Component;

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
		"content": `<style>.cyk790bwf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18v-4.5Q3 12 4.5 12h15q1.5 0 1.5 1.5V18Zm2.5-6L7 7.5h10l1.5 4.5M10 7.5v-2a2 2 0 0 1 4 0v2M5 18v2.5h3V18m8 0v2.5h3V18M5.5 3l1.75 1M18.5 3l-1.75 1");
}
</style><path class="cyk790bwf"/>`,
		"fallback": "uix-sharp:escort-vehicle",
	});
}

export default Component;

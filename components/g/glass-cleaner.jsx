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
		"content": `<style>.rmde2-j-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.8 19H2.5V2.5H19v7.3m-8.25-7.3v16M2.5 10.75h16M19 16q1 2 3 3q-2 1-3 3q-1-2-3-3q2-1 3-3Z");
}
</style><path class="rmde2-j-q"/>`,
		"fallback": "uix-sharp:glass-cleaner",
	});
}

export default Component;

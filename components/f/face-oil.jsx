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
		"content": `<style>.ofxgfacli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 11h3a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18v-3.5A3.5 3.5 0 0 1 7 11m.5-3h2A1.5 1.5 0 0 1 11 9.5A1.5 1.5 0 0 1 9.5 11h-2A1.5 1.5 0 0 1 6 9.5A1.5 1.5 0 0 1 7.5 8M7 8V4.5a1.5 1.5 0 0 1 3 0V8m9 4s-2.5 3.5-2.5 5.5a2.5 2.5 0 0 0 5 0c0-2-2.5-5.5-2.5-5.5");
}
</style><path class="ofxgfacli"/>`,
		"fallback": "uix:face-oil",
	});
}

export default Component;

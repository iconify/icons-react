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
		"content": `<style>.qybqlcimn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21m-13 0V15m4.5 5.5v-8m4.5 8V10.25m1.5-8Q19 4.5 21.25 5Q19 5.5 18.5 7.75Q18 5.5 15.75 5Q18 4.5 18.5 2.25");
}
</style><path class="qybqlcimn"/>`,
		"fallback": "uix:ai-chart",
	});
}

export default Component;

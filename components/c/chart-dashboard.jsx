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
		"content": `<style>.qn-ag_bfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14a6.5 6.5 0 0 1 13 0m-13 3.5h18.75M9 14l3.25-3.25m6.25 6.75V10m2.75 7.5v-11");
}
</style><path class="qn-ag_bfo"/>`,
		"fallback": "uix:chart-dashboard",
	});
}

export default Component;

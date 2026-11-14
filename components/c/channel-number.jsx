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
		"content": `<style>.nvrpwdgja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8h12a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18v-6.5A3.5 3.5 0 0 1 6 8m2-5l4 5l4-5m-5 7.5l-1 6.75m4.5-6.75l-1 6.75m-5-5H16m-8 3.5h7.5");
}
</style><path class="nvrpwdgja"/>`,
		"fallback": "uix:channel-number",
	});
}

export default Component;

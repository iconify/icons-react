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
		"content": `<style>.kppsj0b_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0M6.5 21c0-3.5 2.5-6.5 5.5-6.5s5.5 3 5.5 6.5m-15-10.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m0 9c0-2.25 1.25-4 3-4m11.75-5a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0m4.25 9c0-2.25-1.25-4-3-4");
}
</style><path class="kppsj0b_o"/>`,
		"fallback": "uix:cultural-diversity",
	});
}

export default Component;

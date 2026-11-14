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
		"content": `<style>.liciy5b_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12H5l1.5-2L8 12l2-6.5l2 10l1.5-3.5h3.293m2.4 0H21.5M10 2.5h.01m7.99 12V18m0 3h.01");
}
</style><path class="liciy5b_l"/>`,
		"fallback": "uix:anomaly-score",
	});
}

export default Component;

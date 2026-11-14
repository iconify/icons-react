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
		"content": `<style>.u00s7xb-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5a9.5 9.5 0 0 1 14.25-8.25m3.5 3.5a9.5 9.5 0 0 1 1.25 4.75m-9.5 0l3-5.25m-3 5.25h.01");
}
</style><path class="u00s7xb-g"/>`,
		"fallback": "uix:confidence-score",
	});
}

export default Component;

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
		"content": `<style>.bwbssubyg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12M7 3v2.5c0 3.5 4 5 4 6.5s-4 3-4 6.5V21M17 3v2.5c0 3.5-4 5-4 6.5s4 3 4 6.5V21M6 21h12m-8.25 0q2.25-3.5 4.5 0");
}
</style><path class="bwbssubyg"/>`,
		"fallback": "uix:countdown-workout",
	});
}

export default Component;

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
		"content": `<style>.o8ee3kbfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5c2 0 3 1.5 4.5 1.5s1.5-7 5-7s3.5 7 5 7s2.5-1.5 4.5-1.5M5 21h14M12 8.25Q10.5 7.125 12 6c1-.75 1-1.5 0-2.5M7.5 9.25Q6 8.125 7.5 7t0-2.25m9 4.5Q15 8.125 16.5 7t0-2.25");
}
</style><path class="o8ee3kbfb"/>`,
		"fallback": "uix:inflammation-bio",
	});
}

export default Component;

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
		"content": `<style>.m5k5cm63p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5H5m1.5-2zA1.5 1.5 0 0 1 8 7v1a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 5 8V7a1.5 1.5 0 0 1 1.5-1.5m4.5-1h6a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3a3 3 0 0 1 3-3m3.5 6zA2.5 2.5 0 0 1 17 13v1.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V13a2.5 2.5 0 0 1 2.5-2.5M11.75 17h5.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25h-5.5a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 11.75 17");
}
</style><path class="m5k5cm63p"/>`,
		"fallback": "uix:category-power-tools",
	});
}

export default Component;

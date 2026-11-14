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
		"content": `<style>.ju3oxisao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5V5A1.5 1.5 0 0 1 5 3.5h2A1.5 1.5 0 0 1 8.5 5v15.5m0-14H19m-16.5 14h19m-10-5q2.5-2 5 0t5 0");
}
</style><path class="ju3oxisao"/>`,
		"fallback": "uix:diving-platform",
	});
}

export default Component;

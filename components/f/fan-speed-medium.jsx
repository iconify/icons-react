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
		"content": `<style>.ufe1a0wzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 12a3.25 3.25 0 0 1 0-6a3.25 3.25 0 0 1 0 6a3.25 3.25 0 0 1 5.25 3a3.25 3.25 0 0 1-5.25-3a3.25 3.25 0 0 1-5.25 3a3.25 3.25 0 0 1 5.25-3m7.372-5.162a9 9 0 0 1 0 10.324m2.593-11.389a11.75 11.75 0 0 1 0 12.454");
}
</style><path class="ufe1a0wzp"/>`,
		"fallback": "uix:fan-speed-medium",
	});
}

export default Component;

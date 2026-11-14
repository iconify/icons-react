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
		"content": `<style>.f3jev9b0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5V18c0-2.5 2-4 5-4c2 0 3.5.75 4.5 2c1-1.25 2.5-2 4.5-2c3 0 5 1.5 5 4v2.5ZM4.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0m9 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><path class="f3jev9b0f"/>`,
		"fallback": "uix:clinch",
	});
}

export default Component;

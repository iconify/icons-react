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
		"content": `<style>.za1d4-bmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 15h12.75A2.625 2.625 0 0 1 21 17.625v.25a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 17.875v-.25A2.625 2.625 0 0 1 5.625 15M6 15V9m4 6V9m4 6V9m4 6V9M8 5q2-2.5 4 0t4 0");
}
</style><path class="za1d4-bmj"/>`,
		"fallback": "uix:heat-sink",
	});
}

export default Component;

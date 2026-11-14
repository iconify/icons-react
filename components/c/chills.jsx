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
		"content": `<style>.oa1dmwb4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14V5.5a2 2 0 0 1 4 0V14a4 4 0 1 1-4 0m11-8.5v7m-3-5.25l6 3.5m0-3.5l-6 3.5");
}
</style><path class="oa1dmwb4k"/>`,
		"fallback": "uix:chills",
	});
}

export default Component;

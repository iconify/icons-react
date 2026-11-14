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
		"content": `<style>.b68irhbbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 8.5h11.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 17.75 12H6.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 6.25 8.5M7 12v7.5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V12M9 5.75h6m3-.5q-1.25-1.5 0-2.75");
}
</style><path class="b68irhbbm"/>`,
		"fallback": "uix:cigarette-bin",
	});
}

export default Component;

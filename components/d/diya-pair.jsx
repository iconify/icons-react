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
		"content": `<style>.jfdc61bzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h8c0 3-1.75 5-4 5s-4-2-4-5m11 0h8c0 3-1.75 5-4 5s-4-2-4-5m-11 5h19m-15-15c2 3 2.25 4.5 2.25 5a2.25 2.25 0 0 1-4.5 0c0-.5.25-2 2.25-5m11 0c2 3 2.25 4.5 2.25 5a2.25 2.25 0 0 1-4.5 0c0-.5.25-2 2.25-5");
}
</style><path class="jfdc61bzp"/>`,
		"fallback": "uix:diya-pair",
	});
}

export default Component;

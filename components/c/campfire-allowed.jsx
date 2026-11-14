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
		"content": `<style>.wijs12kzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5c3 3.5 4.5 6 4.5 8.5a4.5 4.5 0 0 1-9 0C5.5 8.5 7 6 10 2.5m-7 19q0-3.25 3-3.25t3 3.25Zm11.285 0H9q0-3.221 2.947-3.25M14.75 18l2 2L21 15.75");
}
</style><path class="wijs12kzb"/>`,
		"fallback": "uix:campfire-allowed",
	});
}

export default Component;

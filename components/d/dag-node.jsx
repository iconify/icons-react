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
		"content": `<style>.qffv3-byo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5h5.5A1.5 1.5 0 0 1 16 9v6a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 15V9A1.5 1.5 0 0 1 9 7.5M2.5 12h5M16 9.5h2.25l3.25-5m-5.5 10h2.25l3.25 5");
}
</style><path class="qffv3-byo"/>`,
		"fallback": "uix:dag-node",
	});
}

export default Component;

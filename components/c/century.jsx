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
		"content": `<style>.tga2v4b4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 15h8a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 13 20H5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 5 15m10.5 2.5h6m-17-12L6 4v7m3-3.5a2 3.5 0 1 0 4 0a2 3.5 0 1 0-4 0m6.75 0a2 3.5 0 1 0 4 0a2 3.5 0 1 0-4 0");
}
</style><path class="tga2v4b4u"/>`,
		"fallback": "uix:century",
	});
}

export default Component;

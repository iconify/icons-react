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
		"content": `<style>.m9cahv_vb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5v4m5-4v4M4 6.5h12v3a6 6 0 0 1-12 0Zm6 9v6m8-7v7M14.5 18h7");
}
</style><path class="m9cahv_vb"/>`,
		"fallback": "uix:connector-add",
	});
}

export default Component;

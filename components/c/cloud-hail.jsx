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
		"content": `<style>.vfvlu3jcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 15.5a4 4 0 0 1 0-8a5.5 5.5 0 0 1 11 1a3.5 3.5 0 0 1-1 7Zm-.5 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><path class="vfvlu3jcr"/>`,
		"fallback": "uix:cloud-hail",
	});
}

export default Component;

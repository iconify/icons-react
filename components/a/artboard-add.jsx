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
		"content": `<style>.hm3j65b5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5V17M14 2.5v11m-11.5-8H17M2.5 14h11m4.5 1v6m-3-3h6");
}
</style><path class="hm3j65b5d"/>`,
		"fallback": "uix:artboard-add",
	});
}

export default Component;

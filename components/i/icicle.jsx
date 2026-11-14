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
		"content": `<style>.v2oz6dbqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19m-17.75 0L5.5 13l1.75-9.5m3 0L12 21l1.75-17.5m3 0L18.5 11l1.75-7.5");
}
</style><path class="v2oz6dbqf"/>`,
		"fallback": "uix:icicle",
	});
}

export default Component;

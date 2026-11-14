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
		"content": `<style>.w15i0abli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5c-2.5 0-3 2-3 3.5c0 2 1 3.5 2 4h10c1-.5 2-2 2-4c0-1.5-.5-3.5-3-3.5c-1.5 0-2.25.75-4 .75S9.5 2.5 8 2.5m4 7.5v11.5M8 13h8m-7 3.25h6m-5 3.25h4");
}
</style><path class="w15i0abli"/>`,
		"fallback": "uix:implant-screw",
	});
}

export default Component;

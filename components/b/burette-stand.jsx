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
		"content": `<style>.y6gxhhh5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 18h13.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 5.25 18M8 2.5V18M8 8h7.5m5-2.5h-5v5h5");
}
</style><path class="y6gxhhh5h"/>`,
		"fallback": "uix:burette-stand",
	});
}

export default Component;

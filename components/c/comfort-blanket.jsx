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
		"content": `<style>.en3fqky_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 4.5H7A3.75 3.75 0 0 0 7 12a3.75 3.75 0 0 0 0 7.5h14ZM7 12h14m-7-7.5V12m3-7.5V12");
}
</style><path class="en3fqky_j"/>`,
		"fallback": "uix:comfort-blanket",
	});
}

export default Component;

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
		"content": `<style>.sf4d6qdxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 13.25a8.25 8.25 0 1 0 16.5 0a8.25 8.25 0 1 0-16.5 0M12 2.5V5m-3 .5V21m6-15.5V21M4.25 10.25h15.5m-15.5 6h15.5");
}
</style><path class="sf4d6qdxb"/>`,
		"fallback": "uix:disco-ball",
	});
}

export default Component;

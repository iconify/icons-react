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
		"content": `<style>.tawiv5b5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-6.5 7h19M6 21.5V17c0-2.5 2.5-4 6-4s6 1.5 6 4v4.5M8 4.5h8");
}
</style><path class="tawiv5b5b"/>`,
		"fallback": "uix:cricket-wide",
	});
}

export default Component;

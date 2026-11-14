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
		"content": `<style>.hor8znb6k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 5.25l2.25-.75c.75-2 3.75-2.5 4.75 0c1 2 3.5 2.5 7.5.75c-1.5 3-4.5 4.5-8 4.5c-2.75 0-4.25-1.25-4.25-3.5Zm5.5 4.5V12m-2.5 9.5V12H15v9.5m-7.5-6.25H15M7.5 18.5H15");
}
</style><path class="hor8znb6k"/>`,
		"fallback": "uix:bird-ladder",
	});
}

export default Component;

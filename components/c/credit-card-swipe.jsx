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
		"content": `<style>.noswjdbmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v4.75a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5V6A3.5 3.5 0 0 1 6 2.5m-3.5 4h19m-16 4h4m-6.5 9h17.5M18 17l2.5 2.5L18 22");
}
</style><path class="noswjdbmy"/>`,
		"fallback": "uix:credit-card-swipe",
	});
}

export default Component;

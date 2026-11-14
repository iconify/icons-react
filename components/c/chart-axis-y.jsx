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
		"content": `<style>.t3kam3b7r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 21.5V3m-2.75 2.75L14 3l2.75 2.75M14 19h-4m4-5h-4m4-5h-4");
}
</style><path class="t3kam3b7r"/>`,
		"fallback": "uix:chart-axis-y",
	});
}

export default Component;

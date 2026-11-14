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
		"content": `<style>.by19cb1ra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 13.5A3.5 3.5 0 0 1 8 8a4 4 0 0 1 8 0a3.5 3.5 0 0 1 4 5.5m-17.5 0h19M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-3-10h.01");
}
</style><path class="by19cb1ra"/>`,
		"fallback": "uix:festival-float-flowers",
	});
}

export default Component;

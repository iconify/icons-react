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
		"content": `<style>.l7ms0zbrd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h10c0 5.5-2 8-5 8S7 9 7 3.5m5 8V18m-4 2.5h8");
}
</style><path class="l7ms0zbrd"/>`,
		"fallback": "uix:fragile-label",
	});
}

export default Component;

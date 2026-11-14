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
		"content": `<style>.x1gy5xbok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5h11a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-11a4 4 0 0 1-4-4a4 4 0 0 1 4-4m.5 4h10m-3 10.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m1-2.5l5 5");
}
</style><path class="x1gy5xbok"/>`,
		"fallback": "uix:button-disabled",
	});
}

export default Component;

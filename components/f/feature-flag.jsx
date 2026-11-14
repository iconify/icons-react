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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t2xvctbcz {
  d: path("M7.5 2.5h8a5 5 0 0 1 5 5a5 5 0 0 1-5 5h-8a5 5 0 0 1-5-5a5 5 0 0 1 5-5");
}

.w1v1sgb9u {
  d: path("M13.25 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m2.25 7.75v6.25m0-6.25H21l-1.5 2l1.5 2h-5.5");
}
</style><g class="hntgybcog"><path class="t2xvctbcz"/><path class="w1v1sgb9u"/></g>`,
		"fallback": "uix:feature-flag",
	});
}

export default Component;

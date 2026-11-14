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
		"content": `<style>.welihn6gm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.625 2.5h2.75A2.625 2.625 0 0 1 16 5.125v.75A2.625 2.625 0 0 1 13.375 8.5h-2.75A2.625 2.625 0 0 1 8 5.875v-.75A2.625 2.625 0 0 1 10.625 2.5m-1 8.75h4.75A2.625 2.625 0 0 1 17 13.875v1.25a2.625 2.625 0 0 1-2.625 2.625h-4.75A2.625 2.625 0 0 1 7 15.125v-1.25a2.625 2.625 0 0 1 2.625-2.625M7 13l-2.5 2.5V18M17 13l2.5 2.5V18m-9.5-.25v3.75m4-3.75v3.75m-3.25-16h2.5");
}
</style><path class="welihn6gm"/>`,
		"fallback": "uix:humanoid-robot",
	});
}

export default Component;

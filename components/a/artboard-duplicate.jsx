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
		"content": `<style>.i6_0b6bfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 7.5h2.75a2.625 2.625 0 0 1 2.625 2.625v6.75A2.625 2.625 0 0 1 7.875 19.5h-2.75A2.625 2.625 0 0 1 2.5 16.875v-6.75A2.625 2.625 0 0 1 5.125 7.5m11 0h2.75a2.625 2.625 0 0 1 2.625 2.625v6.75a2.625 2.625 0 0 1-2.625 2.625h-2.75a2.625 2.625 0 0 1-2.625-2.625v-6.75A2.625 2.625 0 0 1 16.125 7.5M2.5 4.75h4m7 0h4");
}
</style><path class="i6_0b6bfi"/>`,
		"fallback": "uix:artboard-duplicate",
	});
}

export default Component;

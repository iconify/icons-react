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
		"content": `<style>.ht8-yjbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h2.75A2.625 2.625 0 0 1 10.5 5.125v.75A2.625 2.625 0 0 1 7.875 8.5h-2.75A2.625 2.625 0 0 1 2.5 5.875v-.75A2.625 2.625 0 0 1 5.125 2.5m11 6.5h2.75a2.625 2.625 0 0 1 2.625 2.625v.75A2.625 2.625 0 0 1 18.875 15h-2.75a2.625 2.625 0 0 1-2.625-2.625v-.75A2.625 2.625 0 0 1 16.125 9m-11 6.5h2.75a2.625 2.625 0 0 1 2.625 2.625v.75A2.625 2.625 0 0 1 7.875 21.5h-2.75A2.625 2.625 0 0 1 2.5 18.875v-.75A2.625 2.625 0 0 1 5.125 15.5m5.375-10h7V9m0 6v3.5h-7");
}
</style><path class="ht8-yjbau"/>`,
		"fallback": "uix:architecture-diagram",
	});
}

export default Component;

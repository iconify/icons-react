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
		"content": `<style>.yxgy89-me {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5c0-5 4-8 9-8s9 3 9 8Zm7 5.5h4c1.5 0 2.5 4 3 5.5H7C7.5 20 8.5 16 10 16m-7-5.5l7 5.5m11-5.5L14 16");
}
</style><path class="yxgy89-me"/>`,
		"fallback": "uix:capsule-parachute",
	});
}

export default Component;

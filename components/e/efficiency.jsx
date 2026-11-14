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
		"content": `<style>.arfvv6yjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.25 8.5H18a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5h-4.75a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1 3.5-3.5m-.5 3.5h3.75M7 6.5l-4 6h4l-4 6");
}
</style><path class="arfvv6yjr"/>`,
		"fallback": "uix:efficiency",
	});
}

export default Component;

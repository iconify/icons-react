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
		"content": `<style>.otftd_yjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10l-3.5 6v2.5h-3V9ZM3 14.5l2 6h14l2-6m-18 0h18");
}
</style><path class="otftd_yjp"/>`,
		"fallback": "uix:auto-feeder",
	});
}

export default Component;

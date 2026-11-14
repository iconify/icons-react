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
		"content": `<style>.bcch6cchj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9h14l-1.5 12.5h-11Zm0 0a7 4 0 0 1 14 0m-6-4l3-3M9.5 17h.01M12 18.5h.01M14.5 17h.01");
}
</style><path class="bcch6cchj"/>`,
		"fallback": "uix:bubble-tea-shop",
	});
}

export default Component;

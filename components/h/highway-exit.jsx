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
		"content": `<style>.re7tqkbxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21.25V2.75M5.75 6L9 2.75L12.25 6M9 18c0-3.5 2.25-6 5.75-6h6.5M18 8.75L21.25 12L18 15.25");
}
</style><path class="re7tqkbxj"/>`,
		"fallback": "iconoven:highway-exit",
	});
}

export default Component;

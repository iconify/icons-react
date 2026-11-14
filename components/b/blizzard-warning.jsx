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
		"content": `<style>.bvpp6fbnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12a3 3 0 0 1 0-6a4.25 4.25 0 0 1 8.25.75A2.75 2.75 0 0 1 13 12Zm0 3.5h.01m3.99 0h.01m3.99 0h.01m-6.01 4h.01m3.99 0h.01M20 4v10m0 4.25h.01");
}
</style><path class="bvpp6fbnc"/>`,
		"fallback": "uix:blizzard-warning",
	});
}

export default Component;

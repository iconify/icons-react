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
		"content": `<style>.cvltygt5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6h1a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 7 19H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 6m11 0h1a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 18 19h-1a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 17 6M6.5 16v.5m11-.5v.5M12 2.5v1");
}
</style><path class="cvltygt5m"/>`,
		"fallback": "uix:device-compare",
	});
}

export default Component;

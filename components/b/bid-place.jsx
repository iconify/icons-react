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
		"content": `<style>.d3_x25z6d {
  d: path("M3.75 8.25a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p2y3u65sq {
  d: path("M8 7.25L9.75 6v4.5M9.5 14v7.5M18 15v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="d3_x25z6d"/><path class="p2y3u65sq"/></g>`,
		"fallback": "uix:bid-place",
	});
}

export default Component;

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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i3x23cctd {
  d: path("M3 12.5a9 9 0 0 0 18 0");
}

.symzxcowd {
  d: path("M10.5 2.5v6a5.25 5.25 0 1 0 3 0v-6");
}
</style><g class="hntgybcog"><path class="symzxcowd"/><path class="i3x23cctd"/></g>`,
		"fallback": "uix:heating-mantle",
	});
}

export default Component;

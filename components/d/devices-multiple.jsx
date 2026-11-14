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
		"content": `<style>.c_fbxbbjc {
  d: path("M6 4.5h7A3.5 3.5 0 0 1 16.5 8v3a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 11V8A3.5 3.5 0 0 1 6 4.5M9.5 15v2.5m-3 0h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ixwasebxn {
  d: path("M18.5 9.5za3 3 0 0 1 3 3v5a3 3 0 0 1-3 3a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3m0 8.25h.01");
}
</style><g class="hntgybcog"><path class="c_fbxbbjc"/><path class="ixwasebxn"/></g>`,
		"fallback": "uix:devices-multiple",
	});
}

export default Component;

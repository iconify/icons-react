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
		"content": `<style>.ejt-yaczi {
  d: path("M9.75 17.25V11.5a2.25 2.25 0 0 1 4.5 0v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hx2onybpc {
  d: path("M3.5 8V6A2.5 2.5 0 0 1 6 3.5h2m8 0h2A2.5 2.5 0 0 1 20.5 6v2m0 8v2a2.5 2.5 0 0 1-2.5 2.5h-2m-8 0H6A2.5 2.5 0 0 1 3.5 18v-2m3.5-.5v-4a5 5 0 0 1 10 0v4");
}
</style><g class="hntgybcog"><path class="hx2onybpc"/><path class="ejt-yaczi"/></g>`,
		"fallback": "uix:fingerprint-scan",
	});
}

export default Component;

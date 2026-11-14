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

.myafhis1d {
  d: path("M4.5 10.5v10h2.75V15H11v5.5h.6m7.9-8.9v-1.1m-.75 3.75a3.75 3.75 0 1 0 2.5 4.5a3 3 0 0 1-2.5-4.5");
}

.tsjqhoq0r {
  d: path("m3 8.5l1.5-5h15l1.5 5a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0");
}
</style><g class="hntgybcog"><path class="tsjqhoq0r"/><path class="myafhis1d"/></g>`,
		"fallback": "uix:dark-store",
	});
}

export default Component;

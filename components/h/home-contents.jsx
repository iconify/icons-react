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
		"content": `<style>.gllv8yijc {
  d: path("M5 13v-3a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 19 10v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ie_rp7b5m {
  d: path("M2.5 14.5A1.5 1.5 0 0 1 5 13v3.5h14V13a1.5 1.5 0 0 1 2.5 1.5v4h-19Zm2.5 4v2m14-2v2");
}
</style><g class="hntgybcog"><path class="gllv8yijc"/><path class="ie_rp7b5m"/></g>`,
		"fallback": "uix:home-contents",
	});
}

export default Component;

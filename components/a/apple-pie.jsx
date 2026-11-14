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
		"content": `<style>.d-ca_bb8s {
  d: path("M10.5 13.5H18a2.5 2.5 0 0 1-1 3.75A2.5 2.5 0 0 1 14.25 20a2.5 2.5 0 0 1-3.75 1a2.5 2.5 0 0 1-3.75-1A2.5 2.5 0 0 1 4 17.25a2.5 2.5 0 0 1-1-3.75a2.5 2.5 0 0 1 1-3.75A2.5 2.5 0 0 1 6.75 7a2.5 2.5 0 0 1 3.75-1Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfm18kbce {
  d: path("M13.5 10.5H21a2.5 2.5 0 0 0-1-3.75A2.5 2.5 0 0 0 17.25 4a2.5 2.5 0 0 0-3.75-1Z");
}
</style><g class="hntgybcog"><path class="d-ca_bb8s"/><path class="zfm18kbce"/></g>`,
		"fallback": "uix:apple-pie",
	});
}

export default Component;

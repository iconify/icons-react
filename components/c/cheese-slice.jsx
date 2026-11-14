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

.hqo-j3b8k {
  d: path("m3 15.5l2.75.75a2 2 0 0 1 4 1L21 19.75L15.5 3.5Z");
}

.xc8o6e7-n {
  d: path("M11 12.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="hqo-j3b8k"/><path class="xc8o6e7-n"/></g>`,
		"fallback": "uix:cheese-slice",
	});
}

export default Component;

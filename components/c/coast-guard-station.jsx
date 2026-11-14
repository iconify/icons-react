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
		"content": `<style>.cvl8usbbm {
  d: path("M7.75 6.5zA1.5 1.5 0 0 1 9.25 8a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 6.25 8a1.5 1.5 0 0 1 1.5-1.5m8 9.5q1.5-1.25 3 0t2.75 0m-5.75 4q1.5-1.25 3 0t2.75 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q9n5n0b5z {
  d: path("M2.5 20.5v-8h2V4.75L7.75 2.5L11 4.75v7.75h2v8Z");
}
</style><g class="hntgybcog"><path class="q9n5n0b5z"/><path class="cvl8usbbm"/></g>`,
		"fallback": "uix:coast-guard-station",
	});
}

export default Component;

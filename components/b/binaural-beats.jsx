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
		"content": `<style>.ekcc7bclw {
  d: path("M4.5 12.5za1.75 1.75 0 0 1 1.75 1.75v4A1.75 1.75 0 0 1 4.5 20a1.75 1.75 0 0 1-1.75-1.75v-4A1.75 1.75 0 0 1 4.5 12.5m15 0za1.75 1.75 0 0 1 1.75 1.75v4A1.75 1.75 0 0 1 19.5 20a1.75 1.75 0 0 1-1.75-1.75v-4a1.75 1.75 0 0 1 1.75-1.75M9 16.25q1.5-4.125 3 0t3 0");
}

.h3-063b4r {
  d: path("M4.5 13v-2a7.5 7.5 0 0 1 15 0v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h3-063b4r"/><path class="ekcc7bclw"/></g>`,
		"fallback": "uix:binaural-beats",
	});
}

export default Component;

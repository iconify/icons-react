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
		"content": `<style>.aqw2k7gkz {
  d: path("M3.5 21.5v-19m0 2.5h17M9.125 7.5h8.25A2.625 2.625 0 0 1 20 10.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-8.25A2.625 2.625 0 0 1 6.5 15.875v-5.75A2.625 2.625 0 0 1 9.125 7.5M9 5v2.5M17.5 5v2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lsorx1_pd {
  d: path("M8.5 13a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0h5.25M15 13v2m2.25-2v2");
}
</style><g class="hntgybcog"><path class="aqw2k7gkz"/><path class="lsorx1_pd"/></g>`,
		"fallback": "uix:for-rent-sign",
	});
}

export default Component;

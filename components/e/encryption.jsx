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
		"content": `<style>.c1wtwhxjt {
  d: path("m12 2.5l8 3v6c0 5-3.5 8.25-8 10c-4.5-1.75-8-5-8-10v-6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wvr-36ych {
  d: path("M10.75 11h2.5A1.75 1.75 0 0 1 15 12.75v1.5A1.75 1.75 0 0 1 13.25 16h-2.5A1.75 1.75 0 0 1 9 14.25v-1.5A1.75 1.75 0 0 1 10.75 11M10 11V9.5a2 2 0 0 1 4 0V11");
}
</style><g class="hntgybcog"><path class="c1wtwhxjt"/><path class="wvr-36ych"/></g>`,
		"fallback": "uix:encryption",
	});
}

export default Component;

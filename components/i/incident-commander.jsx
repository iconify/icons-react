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
		"content": `<style>.av-m1945q {
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3.5 21c0-4.75 3.75-8 8.5-8s8.5 3.25 8.5 8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jxg_80b3m {
  d: path("m6 15.25l6 3.25l6-3.25");
}
</style><g class="hntgybcog"><path class="av-m1945q"/><path class="jxg_80b3m"/></g>`,
		"fallback": "uix:incident-commander",
	});
}

export default Component;

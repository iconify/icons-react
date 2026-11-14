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

.prl6n-o0z {
  d: path("M8.25 3h7.5A5.25 5.25 0 0 1 21 8.25v.5A5.25 5.25 0 0 1 15.75 14h-7.5A5.25 5.25 0 0 1 3 8.75v-.5A5.25 5.25 0 0 1 8.25 3M11 14h2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 13 17h-2a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 11 14m1 3a4 4 0 0 0 4 4h5");
}

.s28n22bdt {
  d: path("m13 5.5l-2.5 3h3l-2.5 3");
}
</style><g class="hntgybcog"><path class="prl6n-o0z"/><path class="s28n22bdt"/></g>`,
		"fallback": "uix:chademo-plug",
	});
}

export default Component;

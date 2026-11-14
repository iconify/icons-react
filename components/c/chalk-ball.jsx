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

.x2_ztq3rg {
  d: path("M10 6.75L9 4h6l-1 2.75");
}

.xy-qvi6_u {
  d: path("M4.5 14a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="xy-qvi6_u"/><path class="x2_ztq3rg"/></g>`,
		"fallback": "uix:chalk-ball",
	});
}

export default Component;

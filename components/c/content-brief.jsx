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
		"content": `<style>.ch0kbtzke {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8.625 11h5.75a1.125 1.125 0 0 1 1.125 1.125a1.125 1.125 0 0 1-1.125 1.125h-5.75A1.125 1.125 0 0 1 7.5 12.125A1.125 1.125 0 0 1 8.625 11M8 16h8m-8 3h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="ch0kbtzke"/></g>`,
		"fallback": "uix:content-brief",
	});
}

export default Component;

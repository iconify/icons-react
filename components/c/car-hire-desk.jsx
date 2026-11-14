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

.ljkzx3rdw {
  d: path("M2.5 11V7.5L5.25 7l2-3.5H13L15.5 7l2 .5V11Z");
}

.riksvpa4t {
  d: path("M4 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2.5 6.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}
</style><g class="hntgybcog"><path class="ljkzx3rdw"/><path class="riksvpa4t"/></g>`,
		"fallback": "uix:car-hire-desk",
	});
}

export default Component;

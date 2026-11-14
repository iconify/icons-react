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

.pjdj95s2s {
  fill: currentColor;
  d: path("M9.5 6.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0M11.75 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-2.5 5.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.siftifbiq {
  d: path("M8.25 2.5h7.5a1.75 1.75 0 0 1 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 8.25 2.5");
}
</style><g class="hntgybcog"><path class="siftifbiq"/><path class="pjdj95s2s"/></g>`,
		"fallback": "uix:chromatography",
	});
}

export default Component;

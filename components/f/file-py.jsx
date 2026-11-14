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

.tuq82lbhh {
  d: path("M4.5 12V5A2.5 2.5 0 0 1 7 2.5h6.5l6 6V12");
}

.w80whxt-s {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M6 21.5v-6h2.5a2 2 0 0 1 0 4H6m7.5-4l2.5 3l2.5-3m-2.5 3v3");
}
</style><g class="hntgybcog"><path class="tuq82lbhh"/><path class="w80whxt-s"/></g>`,
		"fallback": "uix:file-py",
	});
}

export default Component;

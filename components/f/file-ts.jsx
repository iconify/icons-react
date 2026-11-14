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

.l7pownbuu {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-14 7h5m-2.5 0v6m10.25-5.25c-.5-.75-4.5-1-4.5.75c0 2 4.75.75 4.75 2.75s-4.25 2-5 .75");
}

.tuq82lbhh {
  d: path("M4.5 12V5A2.5 2.5 0 0 1 7 2.5h6.5l6 6V12");
}
</style><g class="hntgybcog"><path class="tuq82lbhh"/><path class="l7pownbuu"/></g>`,
		"fallback": "uix:file-ts",
	});
}

export default Component;

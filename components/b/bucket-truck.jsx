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

.kwmzvp45r {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.pkwn5ujnn {
  d: path("M2.5 16.5h19V12l-3-3.5h-4v8M6 7.5l5.5 9M3 3l.75 4.5h4.5L9 3");
}
</style><g class="hntgybcog"><path class="pkwn5ujnn"/><path class="kwmzvp45r"/></g>`,
		"fallback": "uix:bucket-truck",
	});
}

export default Component;

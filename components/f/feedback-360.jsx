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
		"content": `<style>.bg_8e-7pc {
  d: path("M16.25 5.25h2.5v-2.5M9 7h6a1.5 1.5 0 0 1 1.5 1.5V13a1.5 1.5 0 0 1-1.5 1.5h-3.5L9 16.75V14.5A1.5 1.5 0 0 1 7.5 13V8.5A1.5 1.5 0 0 1 9 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.umawoe4ex {
  d: path("M21.176 9.541a9.5 9.5 0 1 1-2.458-4.259");
}
</style><g class="hntgybcog"><path class="umawoe4ex"/><path class="bg_8e-7pc"/></g>`,
		"fallback": "uix:feedback-360",
	});
}

export default Component;

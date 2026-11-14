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

.m10sqtm9s {
  d: path("M6.5 8.5h6A3.5 3.5 0 0 1 16 12v5.5a3.5 3.5 0 0 1-3.5 3.5h-6A3.5 3.5 0 0 1 3 17.5V12a3.5 3.5 0 0 1 3.5-3.5");
}

.qej0w0b2z {
  d: path("M3 18.5L7.5 14l3.5 3.5l2-2l3 3m2.125-13.875l.139.324a1.5 1.5 0 0 0 .787.787l.324.139a.408.408 0 0 1 0 .75l-.324.139a1.5 1.5 0 0 0-.787.787l-.139.324a.408.408 0 0 1-.75 0l-.139-.324a1.5 1.5 0 0 0-.787-.787l-.324-.139a.408.408 0 0 1 0-.75l.324-.139a1.5 1.5 0 0 0 .787-.787l.139-.324a.408.408 0 0 1 .75 0");
}
</style><g class="hntgybcog"><path class="m10sqtm9s"/><path class="qej0w0b2z"/></g>`,
		"fallback": "uix:ai-image",
	});
}

export default Component;

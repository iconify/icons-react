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
		"content": `<style>.dykh2zrig {
  d: path("M4 4h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 7H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 4m.5 3v14.5h15V7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w4puj2l2z {
  d: path("M10.5 21.5v-5h3v5m-5-11.75h7a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5v-.5a1.5 1.5 0 0 1 1.5-1.5m3.5 0v3.5");
}
</style><g class="hntgybcog"><path class="dykh2zrig"/><path class="w4puj2l2z"/></g>`,
		"fallback": "uix:flat-roof",
	});
}

export default Component;

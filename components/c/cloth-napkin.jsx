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

.mmkbyfbpa {
  d: path("M14 3.5h4.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V14z");
}

.r5iha4hkk {
  d: path("M3.5 14H14V3.5");
}
</style><g class="hntgybcog"><path class="mmkbyfbpa"/><path class="r5iha4hkk"/></g>`,
		"fallback": "uix:cloth-napkin",
	});
}

export default Component;

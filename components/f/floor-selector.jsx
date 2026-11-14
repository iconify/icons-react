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

.jub7f0b8y {
  d: path("M5.125 2.5h4.75A2.625 2.625 0 0 1 12.5 5.125v13.75A2.625 2.625 0 0 1 9.875 21.5h-4.75A2.625 2.625 0 0 1 2.5 18.875V5.125A2.625 2.625 0 0 1 5.125 2.5m.125 4.75h4.5M5.25 12h4.5");
}

.ymb2htbzy {
  d: path("M6 21.5V17h3.25v4.5M15 9l3-3l3 3m-6 6l3 3l3-3");
}
</style><g class="hntgybcog"><path class="jub7f0b8y"/><path class="ymb2htbzy"/></g>`,
		"fallback": "uix:floor-selector",
	});
}

export default Component;

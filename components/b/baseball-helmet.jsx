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

.ryk1lwbtg {
  d: path("M5 19.5C3.5 16 3.5 13 4 11c1-4.5 4.5-7 9-7s7 3 7 7l1.5.5v1h-9V16c0 2-1.5 3.5-3.5 3.5Z");
}

.z75-ylbbe {
  d: path("M6.5 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M14 8h.01");
}
</style><g class="hntgybcog"><path class="ryk1lwbtg"/><path class="z75-ylbbe"/></g>`,
		"fallback": "uix:baseball-helmet",
	});
}

export default Component;

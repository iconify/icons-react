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
		"content": `<style>.fdms_n2ld {
  d: path("M12 3.5L18 7v13.5H6V7Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qchwq-b3l {
  d: path("M10.75 8.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M9 13h6m-6 3.5h4");
}
</style><g class="hntgybcog"><path class="fdms_n2ld"/><path class="qchwq-b3l"/></g>`,
		"fallback": "uix:baggage-tag-airport",
	});
}

export default Component;

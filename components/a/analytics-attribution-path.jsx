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

.t3sn4fnir {
  d: path("M14 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.t551x-b_v {
  d: path("M3.5 19.5L8 13l4 4l4-7.25M3.5 19.5h.01M8 13h.01M12 17h.01m5.74-10.5h.01");
}
</style><g class="hntgybcog"><path class="t3sn4fnir"/><path class="t551x-b_v"/></g>`,
		"fallback": "uix:analytics-attribution-path",
	});
}

export default Component;

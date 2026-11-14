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

.qp-d2zifi {
  d: path("M19 19.5c-5 2-13 .5-13-3s12-3 12-7c0-3-4-4-7-2.5");
}

.r75o9uaig {
  d: path("M5 7a3 2.5 0 1 0 6 0a3 2.5 0 1 0-6 0m2.25-.5h.01m-2.51 10h2.5m9.5-7h2.5");
}
</style><g class="hntgybcog"><path class="qp-d2zifi"/><path class="r75o9uaig"/></g>`,
		"fallback": "uix:caecilian",
	});
}

export default Component;

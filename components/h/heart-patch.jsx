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
		"content": `<style>.bzfticbck {
  d: path("M5.5 12h3L10 9l2.25 6l1.5-3h4.75M5.75 8.25h.01m12.49 7.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mdn_uib5l {
  d: path("M8.625 5.5h6.75a6.125 6.125 0 0 1 6.125 6.125v.75a6.125 6.125 0 0 1-6.125 6.125h-6.75A6.125 6.125 0 0 1 2.5 12.375v-.75A6.125 6.125 0 0 1 8.625 5.5");
}
</style><g class="hntgybcog"><path class="mdn_uib5l"/><path class="bzfticbck"/></g>`,
		"fallback": "uix:heart-patch",
	});
}

export default Component;

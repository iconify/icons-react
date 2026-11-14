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

.jg4k74bcj {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5M9.5 6h.01");
}

.vmqb-88ml {
  d: path("m7 9.5l2.25-1.25L11 9.75m-1.75-1.5l-1 2.75L10 12.75M8.25 11L6 12.5m-.5 5h6.25M10 15.75l1.75 1.75L10 19.25m4.5-.75v-13h4v13");
}
</style><g class="hntgybcog"><path class="jg4k74bcj"/><path class="vmqb-88ml"/></g>`,
		"fallback": "uix:escapeway-sign",
	});
}

export default Component;

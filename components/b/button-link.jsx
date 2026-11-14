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

.lfo47pb3c {
  d: path("M6.875 6.5h10.25a4.375 4.375 0 0 1 4.375 4.375v2.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 13.125v-2.25A4.375 4.375 0 0 1 6.875 6.5");
}

.ztgkbj65n {
  d: path("M10 9.25H8.75a2.75 2.75 0 0 0 0 5.5H10m4-5.5h1.25a2.75 2.75 0 0 1 0 5.5H14M9.25 12h5.5");
}
</style><g class="hntgybcog"><path class="lfo47pb3c"/><path class="ztgkbj65n"/></g>`,
		"fallback": "uix:button-link",
	});
}

export default Component;

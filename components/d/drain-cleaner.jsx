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

.w0l4_139a {
  d: path("M10.75 12h2.5A1.75 1.75 0 0 1 15 13.75v1.5A1.75 1.75 0 0 1 13.25 17h-2.5A1.75 1.75 0 0 1 9 15.25v-1.5A1.75 1.75 0 0 1 10.75 12");
}

.z32-znt-c {
  d: path("M9.5 2.5h5V6L18 9v10.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9l3.5-3Z");
}
</style><g class="hntgybcog"><path class="z32-znt-c"/><path class="w0l4_139a"/></g>`,
		"fallback": "uix:drain-cleaner",
	});
}

export default Component;

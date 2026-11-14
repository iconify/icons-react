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
		"content": `<style>.bzr1dpb5e {
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v7.25A4.375 4.375 0 0 1 17.125 20H6.875A4.375 4.375 0 0 1 2.5 15.625v-7.25A4.375 4.375 0 0 1 6.875 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s318_ibbx {
  fill: currentColor;
  d: path("M7.25 7h9.5a1.75 1.75 0 0 1 1.75 1.75v6.5A1.75 1.75 0 0 1 16.75 17h-9.5a1.75 1.75 0 0 1-1.75-1.75v-6.5A1.75 1.75 0 0 1 7.25 7");
}
</style><g class="hntgybcog"><path class="bzr1dpb5e"/><path class="s318_ibbx"/></g>`,
		"fallback": "uix:frame-fill-container",
	});
}

export default Component;

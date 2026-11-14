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

.hqntv7b-g {
  d: path("m9.5 3l2 2l-2 2M15 21v-3.5h3.5V21");
}

.w4oyqib1q {
  d: path("M5.125 14.5h1.25A2.625 2.625 0 0 1 9 17.125v1.25A2.625 2.625 0 0 1 6.375 21h-1.25A2.625 2.625 0 0 1 2.5 18.375v-1.25A2.625 2.625 0 0 1 5.125 14.5m7.421-3.518l3-2.842a1.75 1.75 0 0 1 2.408 0l3 2.842a1.75 1.75 0 0 1 .546 1.271v6.997A1.75 1.75 0 0 1 19.75 21h-6A1.75 1.75 0 0 1 12 19.25v-6.997a1.75 1.75 0 0 1 .546-1.271m-6.796.768V5h5.75");
}
</style><g class="hntgybcog"><path class="w4oyqib1q"/><path class="hqntv7b-g"/></g>`,
		"fallback": "uix:device-move-room",
	});
}

export default Component;

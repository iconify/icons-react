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
		"content": `<style>.ca2domkog {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m1-7.25H19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kz0rivbhi {
  d: path("M5.125 4.5h6.75A2.625 2.625 0 0 1 14.5 7.125v6.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 2.5 13.875v-6.75A2.625 2.625 0 0 1 5.125 4.5M14.5 8h4l3 3.5v5h-7");
}
</style><g class="hntgybcog"><path class="kz0rivbhi"/><path class="ca2domkog"/></g>`,
		"fallback": "uix:delivery-standard",
	});
}

export default Component;

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
		"content": `<style>.dvsf8ud-p {
  d: path("M5 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-4-8.5L9 5.25M7.625 7.632a2.75 2.75 0 0 1 0-4.764");
}

.fi74932-c {
  d: path("M5 19H3v-4l4-1l2.5-3.5H15l3 3.5l3 1v4h-2M9 19h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fi74932-c"/><path class="dvsf8ud-p"/></g>`,
		"fallback": "uix:car-antenna",
	});
}

export default Component;

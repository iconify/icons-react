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

.ttmqoubtl {
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0m9.75-9.25l-7.5 18.5");
}

.x-4456bpn {
  d: path("M6 12a6 2 0 1 0 12 0a6 2 0 1 0-12 0m6-9a9 9 0 0 1 3.5.75");
}
</style><g class="hntgybcog"><path class="ttmqoubtl"/><path class="x-4456bpn"/></g>`,
		"fallback": "uix:axial-tilt",
	});
}

export default Component;

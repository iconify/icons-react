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

.sdpyfrbtz {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v6.5A3.5 3.5 0 0 1 18 17H6a3.5 3.5 0 0 1-3.5-3.5V7A3.5 3.5 0 0 1 6 3.5");
}

.y5ffysbrz {
  d: path("M5.25 10.25a4 4 0 1 0 8 0a4 4 0 1 0-8 0m2-2l4 4m0-4l-4 4m10-6c-1.25 1.25-1.25 2.5 0 4s1.25 2.75 0 4M6 17v3.5M18 17v3.5");
}
</style><g class="hntgybcog"><path class="sdpyfrbtz"/><path class="y5ffysbrz"/></g>`,
		"fallback": "uix:heat-pump-large",
	});
}

export default Component;

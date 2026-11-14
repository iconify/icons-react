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

.ox1lee2qg {
  d: path("m14.315 6.834l5.372 10.054a2.625 2.625 0 0 1-2.316 3.862H6.629a2.625 2.625 0 0 1-2.316-3.862L9.685 6.834a2.625 2.625 0 0 1 4.63 0");
}

.v4d4_sb8y {
  d: path("M8.25 15.75L10.5 18l4-4.75");
}
</style><g class="hntgybcog"><path class="ox1lee2qg"/><path class="v4d4_sb8y"/></g>`,
		"fallback": "uix:check-triangle",
	});
}

export default Component;

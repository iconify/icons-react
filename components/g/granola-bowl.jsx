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

.wynuy_btu {
  d: path("M9.5 7.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7-.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.zhp-udb8c {
  d: path("M2.5 12h19c-.5 5-4.5 7.75-9.5 7.75S3 17 2.5 12m1 0a2.5 2.5 0 0 1 5 0a4.5 4.5 0 0 1 7 0a2.5 2.5 0 0 1 5 0");
}
</style><g class="hntgybcog"><path class="zhp-udb8c"/><path class="wynuy_btu"/></g>`,
		"fallback": "uix:granola-bowl",
	});
}

export default Component;

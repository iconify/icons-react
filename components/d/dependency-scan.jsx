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
		"content": `<style>.g0f834bgv {
  d: path("M3.5 6L10 9.5L16.5 6M10 9.5v7m5 1.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m4.75 2l1.75 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n1f9d0qaa {
  d: path("m10.83 2.947l4.75 2.557a1.75 1.75 0 0 1 .92 1.541v4.91a1.75 1.75 0 0 1-.92 1.541l-4.75 2.557a1.75 1.75 0 0 1-1.66 0l-4.75-2.557a1.75 1.75 0 0 1-.92-1.541v-4.91a1.75 1.75 0 0 1 .92-1.541l4.75-2.557a1.75 1.75 0 0 1 1.66 0");
}
</style><g class="hntgybcog"><path class="n1f9d0qaa"/><path class="g0f834bgv"/></g>`,
		"fallback": "uix:dependency-scan",
	});
}

export default Component;

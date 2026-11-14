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

.jw1we_egf {
  d: path("M11.359 10.141za1.75 1.75 0 0 1 0 2.475l-4.243 4.243a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475l4.243-4.243a1.75 1.75 0 0 1 2.475 0M14.75 18l2 2L21 15.75");
}

.ym5bs9qym {
  d: path("M15.195 3.561a4 4 0 1 1-4.634 3.244");
}
</style><g class="hntgybcog"><path class="ym5bs9qym"/><path class="jw1we_egf"/></g>`,
		"fallback": "uix:corrective-action",
	});
}

export default Component;

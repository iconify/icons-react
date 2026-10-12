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

.l0ojli41q {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 2.5px;
}

.z2vc6qybf {
  d: path("M2.75 11h3m6 0h9.5m-12.5 0c-1-2.25-3-2.25-3 0s2 2.25 3 0m0 0c1-2.25 3-2.25 3 0s-2 2.25-3 0");
}
</style><g class="hntgybcog"><rect class="l0ojli41q"/><path class="z2vc6qybf"/></g>`,
		"fallback": "iconoven:gift-card",
	});
}

export default Component;

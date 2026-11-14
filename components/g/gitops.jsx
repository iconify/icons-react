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

.mgaep1b3k {
  d: path("M6.5 7.25V20.5m10-12.25c0 4.25-10 3.25-10 7.25m8.25 2.5a3.25 3.25 0 0 1 6-1.5m0-2.25v2.25H18.5m2.75 1.5a3.25 3.25 0 0 1-6 1.5m0 2.25V19.5h2.25");
}

.r2crge95p {
  d: path("M4.25 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m10 1a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="r2crge95p"/><path class="mgaep1b3k"/></g>`,
		"fallback": "uix:gitops",
	});
}

export default Component;

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

.m2ri9cc6o {
  d: path("M14 9.5h4v5h-4Z");
}

.nt8cxnbeh {
  d: path("M3 12h2.5");
}

.qvx0fvm9m {
  d: path("M7 8h4v8H7Z");
}

.y7_y8yq8z {
  d: path("M18.5 12H21");
}
</style><g class="hntgybcog"><path class="nt8cxnbeh"/><path class="y7_y8yq8z"/><path class="qvx0fvm9m"/><path class="m2ri9cc6o"/></g>`,
		"fallback": "iconmind:align-center-horizontal-outline-thin",
	});
}

export default Component;

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

.md2-ubbkw {
  d: path("M13.5 19.5L12 21L6 15");
}

.w3b9nxekf {
  d: path("M13.5 4.5L12 3L6 9");
}

.w3fj3ibba {
  d: path("M16.5 7.5L18 9");
}

.wjnwtubpm {
  d: path("M16.5 16.5L18 15");
}
</style><g class="hntgybcog"><path class="md2-ubbkw"/><path class="wjnwtubpm"/><path class="w3b9nxekf"/><path class="w3fj3ibba"/></g>`,
		"fallback": "solar:chevrons-up-down-broken",
	});
}

export default Component;

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

.k32cqsb-b {
  d: path("M19 13L12 7L10.25 8.5M5 13L7.33333 11");
}

.msvkvmbbw {
  d: path("M5 17L12 11L13.75 12.5M19 17L16.6667 15");
}
</style><g class="hntgybcog"><path class="k32cqsb-b"/><path class="msvkvmbbw"/></g>`,
		"fallback": "solar:double-alt-arrow-up-broken",
	});
}

export default Component;

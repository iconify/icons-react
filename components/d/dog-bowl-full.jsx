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
		"content": `<style>.aucruwb5p {
  d: path("M5.151 11.5h13.698a1.75 1.75 0 0 1 1.666 2.286l-1.125 3.5a1.75 1.75 0 0 1-1.666 1.214H6.276a1.75 1.75 0 0 1-1.666-1.214l-1.125-3.5A1.75 1.75 0 0 1 5.151 11.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rlavmhh0b {
  d: path("M5 11.5A3 3 0 0 1 9.5 8a2.5 2.5 0 0 1 5 0a3 3 0 0 1 4.5 3.5");
}
</style><g class="hntgybcog"><path class="aucruwb5p"/><path class="rlavmhh0b"/></g>`,
		"fallback": "uix:dog-bowl-full",
	});
}

export default Component;

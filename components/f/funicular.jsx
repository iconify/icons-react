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
		"content": `<style>.d2yia22su {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 10.75h4.5q1 0 1-1v-2q0-1 1-1H17q1 0 1 1v2.29q0 1-.9 1.43L5.9 16.76q-.9.43-.9-.57v-4.44q0-1 1-1m5.5 0v3.37M18 9l3.25-1.54");
}

.e2c2s8bhf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 21.25l18.5-8.75");
}

.e6vhfnovj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 17.5h.01m7.99-3.78h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="d2yia22su"/><path class="e6vhfnovj"/><path class="e2c2s8bhf"/></g>`,
		"fallback": "iconoven:funicular",
	});
}

export default Component;

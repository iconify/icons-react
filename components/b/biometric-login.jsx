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

.lows_ybpj {
  d: path("M3.5 8V6A2.5 2.5 0 0 1 6 3.5h2m8 0h2A2.5 2.5 0 0 1 20.5 6v2m0 8v2a2.5 2.5 0 0 1-2.5 2.5h-2m-8 0H6A2.5 2.5 0 0 1 3.5 18v-2M8 14v-2.5a4 4 0 0 1 8 0V14");
}

.nceevd1dm {
  d: path("M10.5 16.5v-5a1.5 1.5 0 0 1 3 0v4");
}
</style><g class="hntgybcog"><path class="lows_ybpj"/><path class="nceevd1dm"/></g>`,
		"fallback": "uix:biometric-login",
	});
}

export default Component;

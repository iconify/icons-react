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

.q9-hxcalr {
  d: path("M3.5 19a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m7.5-5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-1 7.5a2.75 2.75 0 0 1 5.5 0M18.5 9l-2-3a2.5 2.5 0 1 1 4 0Z");
}

.z8_mfybfs {
  d: path("M2.5 17.5V11A1.5 1.5 0 0 1 4 9.5h5V12h2l2 2.5v3Z");
}
</style><g class="hntgybcog"><path class="z8_mfybfs"/><path class="q9-hxcalr"/></g>`,
		"fallback": "uix:crew-on-site",
	});
}

export default Component;

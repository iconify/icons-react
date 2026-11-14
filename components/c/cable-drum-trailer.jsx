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

.kcm_iccrw {
  d: path("M5 8.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0m6 0h.01m-7.51 9H18l3.5 2");
}

.vt3z_xb_s {
  d: path("M5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="kcm_iccrw"/><path class="vt3z_xb_s"/></g>`,
		"fallback": "uix:cable-drum-trailer",
	});
}

export default Component;

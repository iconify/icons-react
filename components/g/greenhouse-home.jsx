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

.ovf4rgbwp {
  d: path("M10 21.5v-5h4v5");
}

.vcm_6xbqr {
  d: path("M2.5 21.5V13a9.5 9.5 0 0 1 19 0v8.5Zm5-16.75V21.5m9-16.75V21.5M2.5 13h19");
}
</style><g class="hntgybcog"><path class="vcm_6xbqr"/><path class="ovf4rgbwp"/></g>`,
		"fallback": "uix:greenhouse-home",
	});
}

export default Component;

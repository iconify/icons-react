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

.mwaecstwf {
  d: path("M20 20H10V4");
}

.p1z08ccdv {
  d: path("m5 9 5 -5 5 5");
}
</style><g class="hntgybcog"><path class="mwaecstwf"/><path class="p1z08ccdv"/></g>`,
		"fallback": "iconmind:corner-left-up-outline-thin",
	});
}

export default Component;

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
		"content": `<style>.g1ztaob7y {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.75 7.25l10.5 9.5l-5.25 4.5V2.75l5.25 4.5l-10.5 9.5");
}

.mifla9vvb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.5 12h.01m16.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="g1ztaob7y"/><path class="mifla9vvb"/></g>`,
		"fallback": "iconoven:bluetooth",
	});
}

export default Component;

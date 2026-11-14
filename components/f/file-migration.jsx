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

.tszx47bzs {
  d: path("m7.5 18.25l.75-1.75l2 .75");
}

.vawmipjtt {
  d: path("M16.5 11.25L15.75 13l-2-.75m2 4.25a4 4 0 0 1-7.5 0");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}

.z8xqfcb0y {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8.25 13a4 4 0 0 1 7.5 0");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="z8xqfcb0y"/><path class="vawmipjtt"/><path class="tszx47bzs"/></g>`,
		"fallback": "uix:file-migration",
	});
}

export default Component;

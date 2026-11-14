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

.smp72abmf {
  d: path("m14.5 6.25l2 2l2-2m-4.75 11.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m4.75 2L20.75 22");
}

.vt4lcyb8a {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v.75A4.375 4.375 0 0 1 17.125 12H6.875A4.375 4.375 0 0 1 2.5 7.625v-.75A4.375 4.375 0 0 1 6.875 2.5");
}
</style><g class="hntgybcog"><path class="vt4lcyb8a"/><path class="smp72abmf"/></g>`,
		"fallback": "uix:dropdown-search",
	});
}

export default Component;

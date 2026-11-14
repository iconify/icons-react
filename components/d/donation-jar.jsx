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

.p0n-lbc5y {
  d: path("M10 12h4a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 14 15h-4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 10 12m0 3h4a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 14 18h-4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 10 15");
}

.sjadc1ffj {
  d: path("M6.75 2.5h10.5A1.75 1.75 0 0 1 19 4.25A1.75 1.75 0 0 1 17.25 6H6.75A1.75 1.75 0 0 1 5 4.25A1.75 1.75 0 0 1 6.75 2.5M6.5 6l-1 2.5V19a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8.5l-1-2.5");
}
</style><g class="hntgybcog"><path class="sjadc1ffj"/><path class="p0n-lbc5y"/></g>`,
		"fallback": "uix:donation-jar",
	});
}

export default Component;

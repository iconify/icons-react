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
		"content": `<style>.e_6pypczm {
  d: path("M3.5 12A8.5 8.5 0 0 1 18 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mfq48mbqz {
  d: path("M6 21.5V18h3.5");
}

.rmeuof7of {
  d: path("M18 2.5V6h-3.5m6 6A8.5 8.5 0 0 1 6 18");
}

.x2ho6y6-n {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="x2ho6y6-n"/><path class="e_6pypczm"/><path class="rmeuof7of"/><path class="mfq48mbqz"/></g>`,
		"fallback": "uix:convert-crypto",
	});
}

export default Component;

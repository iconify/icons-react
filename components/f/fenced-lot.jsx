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

.ksez664jp {
  d: path("M3.75 21.5V15L5 13.25L6.25 15v6.5m2.25 0V15l1.25-1.75L11 15v6.5m2 0V15l1.25-1.75L15.5 15v6.5m2.25 0V15L19 13.25L20.25 15v6.5M2.5 18h19");
}

.lnr-gu81x {
  d: path("M4.25 2.5h15.5a1.75 1.75 0 0 1 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 4.25 2.5");
}
</style><g class="hntgybcog"><path class="lnr-gu81x"/><path class="ksez664jp"/></g>`,
		"fallback": "uix:fenced-lot",
	});
}

export default Component;

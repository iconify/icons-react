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
		"content": `<style>.coaj1tg0l {
  d: path("M9 11q2 4.5 0 9m6-9q-2 4.5 0 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oge8ivj8c {
  d: path("M3.5 13a8.5 8 0 0 1 17 0");
}

.r6ni9ykjg {
  d: path("M6.5 15.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.tpktuzbem {
  d: path("M17.75 11.25L20.5 13l1.5-2.75");
}
</style><g class="hntgybcog"><path class="r6ni9ykjg"/><path class="coaj1tg0l"/><path class="oge8ivj8c"/><path class="tpktuzbem"/></g>`,
		"fallback": "uix:baseball-fly-ball",
	});
}

export default Component;

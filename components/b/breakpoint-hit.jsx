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
		"content": `<style>.am74-ackv {
  d: path("M2 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k9fhdnbwh {
  fill: currentColor;
  d: path("M4.75 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.lb0d9ub6h {
  d: path("M14 8.5h7.5m-7.5 7h5");
}
</style><g class="hntgybcog"><path class="am74-ackv"/><path class="k9fhdnbwh"/><path class="lb0d9ub6h"/></g>`,
		"fallback": "uix:breakpoint-hit",
	});
}

export default Component;

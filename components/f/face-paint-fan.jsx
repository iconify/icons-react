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

.iu6v_ob9x {
  d: path("M9.5 18.25q2.5 1.25 5 0");
}

.u5n7dcbcn {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M9 9h.01M15 9h.01M2.5 12.5h19m-18.25 3h17.5");
}
</style><g class="hntgybcog"><path class="u5n7dcbcn"/><path class="iu6v_ob9x"/></g>`,
		"fallback": "uix:face-paint-fan",
	});
}

export default Component;

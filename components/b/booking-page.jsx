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
		"content": `<style>.c4phdqv2q {
  d: path("M10.5 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l_qchx16j {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 14V6A3.5 3.5 0 0 1 6 2.5m6 15V21m-4 0h8");
}

.qf33jccil {
  d: path("M8.25 6.5h7.5a1.75 1.75 0 0 1 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 8.25 6.5M9.5 5.25v2.5m5-2.5v2.5");
}
</style><g class="hntgybcog"><path class="l_qchx16j"/><path class="qf33jccil"/><path class="c4phdqv2q"/></g>`,
		"fallback": "uix:booking-page",
	});
}

export default Component;

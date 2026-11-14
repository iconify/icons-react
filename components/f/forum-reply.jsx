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
		"content": `<style>.agwtm1dvn {
  d: path("M7.5 7.5V5A2.5 2.5 0 0 1 10 2.5h9A2.5 2.5 0 0 1 21.5 5v6.5A2.5 2.5 0 0 1 19 14h-2.5m-8-3.75L6 12.75l2.5 2.5");
}

.cw2t6-b_o {
  d: path("M6 12.75h5a2.5 2.5 0 0 1 2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ot05ebsnk {
  d: path("M5 7.5h9a2.5 2.5 0 0 1 2.5 2.5v5.5A2.5 2.5 0 0 1 14 18H9.5L6 21v-3H5a2.5 2.5 0 0 1-2.5-2.5V10A2.5 2.5 0 0 1 5 7.5");
}
</style><g class="hntgybcog"><path class="ot05ebsnk"/><path class="agwtm1dvn"/><path class="cw2t6-b_o"/></g>`,
		"fallback": "uix:forum-reply",
	});
}

export default Component;

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

.rbkrp3kdq {
  d: path("M3.5 8V3.5H8m6 6.5l2-2m2.25-2.25L20.5 3.5m-4.5 0h4.5V8");
}

.vz0onjxyz {
  d: path("M12 21v-9L3.5 3.5");
}
</style><g class="hntgybcog"><path class="vz0onjxyz"/><path class="rbkrp3kdq"/></g>`,
		"fallback": "uix:contingency",
	});
}

export default Component;

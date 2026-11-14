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

.o4tsavstq {
  d: path("M3.5 12.5a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0M3 4h18");
}

.qfbzcnnte {
  d: path("m10 12l2-3.5l2 3.5");
}

.tvep3wg_i {
  d: path("m12.954 9.285l2.197 1.81a1.5 1.5 0 0 1 .253 2.05l-2.198 2.973a1.5 1.5 0 0 1-2.412 0l-2.198-2.973a1.5 1.5 0 0 1 .253-2.05l2.197-1.81a1.5 1.5 0 0 1 1.908 0M7.75 12h8.5");
}
</style><g class="hntgybcog"><path class="o4tsavstq"/><path class="tvep3wg_i"/><path class="qfbzcnnte"/></g>`,
		"fallback": "uix:brooch",
	});
}

export default Component;

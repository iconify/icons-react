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

.lcz74t6md {
  d: path("M2.5 16.75H15l3.5-4.25m-9 0V21M7 9.5Q5.5 7.75 7 6t0-3.5m5 7Q10.5 7.75 12 6t0-3.5m5 7Q15.5 7.75 17 6t0-3.5");
}

.q5dvmsbzk {
  d: path("M6 12.5h12a3.5 3.5 0 0 1 3.5 3.5v1.5A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5V16A3.5 3.5 0 0 1 6 12.5");
}
</style><g class="hntgybcog"><path class="q5dvmsbzk"/><path class="lcz74t6md"/></g>`,
		"fallback": "uix:electric-blanket",
	});
}

export default Component;

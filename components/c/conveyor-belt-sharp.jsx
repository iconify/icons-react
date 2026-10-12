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
		"content": `<style>.pd_hrcw7j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 6.25h6v5.25h-6zm8.5 1h6.5v4.25H13zM2.75 14h18.5v5H2.75z");
}

.q0v_7u20k {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 19v2.25m11-2.25v2.25");
}

.t1oufub1w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.25 16.5h.01m6.74 0h.01m6.74 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="pd_hrcw7j"/><path class="t1oufub1w"/><path class="q0v_7u20k"/></g>`,
		"fallback": "iconoven:conveyor-belt-sharp",
	});
}

export default Component;

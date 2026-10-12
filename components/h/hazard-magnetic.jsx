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

.l1mthztqi {
  d: path("m12.98 4.99l7.29 13.02q.98 1.74-1.02 1.74H4.75q-2 0-1.02-1.74l7.29-13.02q.98-1.74 1.96 0");
}

.q7wpfibzh {
  d: path("M9.75 11v2.5a2.25 2.25 0 0 0 4.5 0V11m-4.5 1.5H11m2 0h1.25");
}
</style><g class="hntgybcog"><path class="l1mthztqi"/><path class="q7wpfibzh"/></g>`,
		"fallback": "iconoven:hazard-magnetic",
	});
}

export default Component;

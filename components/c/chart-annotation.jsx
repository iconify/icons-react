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
		"content": `<style>.gdq1qkwik {
  d: path("M18.75 2.5v2.75h2.75M15 7h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n4-cnub9n {
  d: path("m2.5 19.5l3-4.5L8 10.5l3.5 6L15 14l6.5 4");
}

.naxuihbbe {
  fill: currentColor;
  d: path("M6.5 10.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.pt9utpz-k {
  d: path("m9.5 9.5l3-2m.5-5h5.75l2.75 2.75V10H13Z");
}
</style><g class="hntgybcog"><path class="n4-cnub9n"/><path class="naxuihbbe"/><path class="pt9utpz-k"/><path class="gdq1qkwik"/></g>`,
		"fallback": "uix:chart-annotation",
	});
}

export default Component;

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
		"content": `<style>.cr71kccgc {
  d: path("M8.5 11.17a5 5 0 1 1-2.198 6.04");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uw19hwb7y {
  d: path("M10.25 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m1.75 4V14h4.5l2 5.5");
}
</style><g class="hntgybcog"><path class="uw19hwb7y"/><path class="cr71kccgc"/></g>`,
		"fallback": "uix:bank-wheelchair",
	});
}

export default Component;

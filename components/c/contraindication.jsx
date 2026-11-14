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
		"content": `<style>.api7c2zyf {
  d: path("M16.243 7.757za2.5 2.5 0 0 1 0 3.536l-4.95 4.95a2.5 2.5 0 0 1-3.536 0a2.5 2.5 0 0 1 0-3.536l4.95-4.95a2.5 2.5 0 0 1 3.536 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k-_-bttti {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m2.75-6.75l13.5 13.5");
}
</style><g class="hntgybcog"><path class="k-_-bttti"/><path class="api7c2zyf"/></g>`,
		"fallback": "uix:contraindication",
	});
}

export default Component;

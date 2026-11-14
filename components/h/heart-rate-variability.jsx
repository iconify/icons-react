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
		"content": `<style>.ab6nkebct {
  d: path("M12 20c-7-4.5-9.5-8.5-9.5-11.5s2.25-5 4.75-5c2 0 3.75 1.25 4.75 3c1-1.75 2.75-3 4.75-3c2.5 0 4.75 2 4.75 5S19 15.5 12 20");
}

.c-grx3b4o {
  d: path("M6.5 11.5H9L10.5 9l2.5 6l1.5-3.5h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ab6nkebct"/><path class="c-grx3b4o"/></g>`,
		"fallback": "uix:heart-rate-variability",
	});
}

export default Component;

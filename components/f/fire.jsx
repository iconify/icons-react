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

.lksc8qbuu {
  d: path("M12 21.5c-4 0-7-2.75-7-6.5c0-4 3.5-6 4.5-10.5C11 6 12 7.75 12 10c1.5-.75 2.5-2 2.75-3.5c2.75 2 4.25 5 4.25 8.5c0 3.75-3 6.5-7 6.5");
}

.na89a1bzq {
  d: path("M12 21.5c-1.4 0-2.5-1.1-2.5-2.5c0-1.75 1.5-2.5 2.5-4.5c1 2 2.5 2.75 2.5 4.5c0 1.4-1.1 2.5-2.5 2.5");
}
</style><g class="hntgybcog"><path class="lksc8qbuu"/><path class="na89a1bzq"/></g>`,
		"fallback": "uix:fire",
	});
}

export default Component;

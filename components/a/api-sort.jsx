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
		"content": `<style>.oque_hkck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5H6A1.5 1.5 0 0 0 4.5 5v5.5L3 12l1.5 1.5V19A1.5 1.5 0 0 0 6 20.5h.5M9 7h6.75M9 12h4.5M9 17h2.75M19 3.5v17m-3-3l3 3l3-3");
}
</style><path class="oque_hkck"/>`,
		"fallback": "uix:api-sort",
	});
}

export default Component;

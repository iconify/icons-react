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

.k_1f9-bwy {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v3a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 10V7A3.5 3.5 0 0 1 6 3.5");
}

.yw34a-bmx {
  d: path("M9.75 8.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M12 16.25v5.25m-2.75-2.75L12 21.5l2.75-2.75");
}
</style><g class="hntgybcog"><path class="k_1f9-bwy"/><path class="yw34a-bmx"/></g>`,
		"fallback": "uix:banknote-download",
	});
}

export default Component;

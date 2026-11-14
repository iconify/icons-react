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

.ra7rg7d1h {
  d: path("M9.75 7.25a2.25 1.25 0 1 0 4.5 0a2.25 1.25 0 1 0-4.5 0M2.5 12l9.5 5l9.5-5");
}

.xxyy7cbyl {
  d: path("M6 10h12a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18v-4.5A3.5 3.5 0 0 1 6 10m-2 0V5.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1V10");
}
</style><g class="hntgybcog"><path class="xxyy7cbyl"/><path class="ra7rg7d1h"/></g>`,
		"fallback": "uix:account-salary",
	});
}

export default Component;

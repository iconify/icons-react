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
		"content": `<style>.hiz-mubjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h9.25A2.625 2.625 0 0 1 17.5 5.625v4.75A2.625 2.625 0 0 1 14.875 13h-9.25A2.625 2.625 0 0 1 3 10.375v-4.75A2.625 2.625 0 0 1 5.625 3M2.5 16.5h10.4m5.6-1.75Q19 17.5 21.75 18q-2.75.5-3.25 3.25Q18 18.5 15.25 18q2.75-.5 3.25-3.25");
}
</style><path class="hiz-mubjr"/>`,
		"fallback": "uix:clean-desk",
	});
}

export default Component;

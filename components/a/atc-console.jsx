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
		"content": `<style>.r60cl1g-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h2.75A2.625 2.625 0 0 1 11 5.625v2.25A2.625 2.625 0 0 1 8.375 10.5h-2.75A2.625 2.625 0 0 1 3 7.875v-2.25A2.625 2.625 0 0 1 5.625 3m10 0h2.75A2.625 2.625 0 0 1 21 5.625v2.25a2.625 2.625 0 0 1-2.625 2.625h-2.75A2.625 2.625 0 0 1 13 7.875v-2.25A2.625 2.625 0 0 1 15.625 3M2.5 14h19L20 19.5H4ZM7 10.5V14m10-3.5V14");
}
</style><path class="r60cl1g-z"/>`,
		"fallback": "uix:atc-console",
	});
}

export default Component;

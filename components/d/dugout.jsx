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
		"content": `<style>.as8tcohpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 8l3-5h13l3 5ZM5 21v-4.5h14V21M6 12h4c2 0 4-1.25 7-1.25a1.25 1.25 0 0 1 0 2.5c-3 0-5-1.25-7-1.25");
}
</style><path class="as8tcohpw"/>`,
		"fallback": "uix:dugout",
	});
}

export default Component;

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
		"content": `<style>.ne71ccc4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.625 8h2.75A2.625 2.625 0 0 1 12 10.625v7.75A2.625 2.625 0 0 1 9.375 21h-2.75A2.625 2.625 0 0 1 4 18.375v-7.75A2.625 2.625 0 0 1 6.625 8M6 8V5h4v3m4-2h.01M17 4h.01M17 8h.01M20 6h.01");
}
</style><path class="ne71ccc4a"/>`,
		"fallback": "uix:air-freshener",
	});
}

export default Component;

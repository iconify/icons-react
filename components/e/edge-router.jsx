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
		"content": `<style>.fe78fnh4p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18v7H3Zm3.5 0L5 3.5M17.5 11L19 3.5M2.5 21h19M7 14.5h.01m2.99 0h.01");
}
</style><path class="fe78fnh4p"/>`,
		"fallback": "uix-sharp:edge-router",
	});
}

export default Component;

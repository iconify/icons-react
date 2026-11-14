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
		"content": `<style>.l88t6-krz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 15.5a4 4 0 0 1 0-8a5.5 5.5 0 0 1 11 1a3.5 3.5 0 0 1-1 7ZM6 18v3.5m-1.5-2.75l3 2m0-2l-3 2M12 18v3.5m-1.5-2.75l3 2m0-2l-3 2M18 18v3.5m-1.5-2.75l3 2m0-2l-3 2");
}
</style><path class="l88t6-krz"/>`,
		"fallback": "uix:cloud-snow-heavy",
	});
}

export default Component;

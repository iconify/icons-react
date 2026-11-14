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
		"content": `<style>.afpa97-1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.5L2.5 12L6 15.5m4-7L6.5 12l3.5 3.5m8-7l3.5 3.5l-3.5 3.5m-4-7l3.5 3.5l-3.5 3.5");
}
</style><path class="afpa97-1d"/>`,
		"fallback": "uix:chevrons-left-right",
	});
}

export default Component;

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
		"content": `<style>.no54wabji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 13.5a3.5 3.5 0 0 1-.5-7a5 5 0 0 1 9-.5a3.75 3.75 0 0 1 .25 7.5Zm12.75 1.75v6.25m-3-2.5l3-1.75l3 1.75m-4.5 2.5h3");
}
</style><path class="no54wabji"/>`,
		"fallback": "uix:cloud-seeding",
	});
}

export default Component;

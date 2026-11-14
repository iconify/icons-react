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
		"content": `<style>.k7_5jcg4p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.5 9l-1-6h-6v6h11a1.5 1.5 0 0 1 1.5 1.5v3M2 16.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m9.25 2.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M20.5 14L18 17.75h3.5L19 21.5");
}
</style><path class="k7_5jcg4p"/>`,
		"fallback": "uix:electric-tractor",
	});
}

export default Component;

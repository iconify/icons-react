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
		"content": `<style>.yqu6hdbfu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 3.5c-4 .5-6 5.5-6 10.5c0 4 2 6.5 4.25 6.5c1.25 0 1.75-1 1.75-2.5Zm3 0c4 .5 6 5.5 6 10.5c0 4-2 6.5-4.25 6.5c-1.25 0-1.75-1-1.75-2.5Z");
}
</style><path class="yqu6hdbfu"/>`,
		"fallback": "uix:cloven-hoof-print",
	});
}

export default Component;

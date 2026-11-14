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
		"content": `<style>.fao1a5gql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.75 5.5c-4-2.75-8.75 0-8.25 4.75l-5-.75l2.75 2L7.5 15l2-4.75c3.75 2.75 8.5 0 8.25-4.75M3 19q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="fao1a5gql"/>`,
		"fallback": "uix:fish-jumping",
	});
}

export default Component;

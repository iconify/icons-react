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
		"content": `<style>.uy3qbgbqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.5h18c0 5-4 8-9 8s-9-3-9-8m7.737-5.548l1.061 1.061a1.5 1.5 0 0 1 0 2.121l-1.414 1.414a1.5 1.5 0 0 1-2.121 0l-1.061-1.061a1.5 1.5 0 0 1 0-2.121l1.414-1.414a1.5 1.5 0 0 1 2.121 0m.513.548l5-5m-8.75 13h9");
}
</style><path class="uy3qbgbqe"/>`,
		"fallback": "uix:hair-coloring",
	});
}

export default Component;

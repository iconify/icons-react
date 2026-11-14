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
		"content": `<style>.z3091jjsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 10.5l6-6l6 6v11H6Zm2 4h3m2 0h3M4 12.75L2.5 14.5L4 16.25m16-3.5l1.5 1.75l-1.5 1.75");
}
</style><path class="z3091jjsu"/>`,
		"fallback": "uix-sharp:cross-section",
	});
}

export default Component;

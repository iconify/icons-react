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
		"content": `<style>.evynwnb7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4c2.5-1.25 4.5 1.25 7 0s4.5 1.25 7 0v8.5c-2.5 1.25-4.5-1.25-7 0s-4.5-1.25-7 0M5 3v18.5m9.5-3.5l2.5 2.5l4.5-5");
}
</style><path class="evynwnb7g"/>`,
		"fallback": "uix-sharp:goal-conversion",
	});
}

export default Component;

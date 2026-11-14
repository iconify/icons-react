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
		"content": `<style>.vbqgll2bl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 8.75l19-3m-19 6l19-3M8 13.5q4 1.5 8 0a2.5 2.5 0 0 1 0 5q-4-1.5-8 0a2.5 2.5 0 0 1 0-5Z");
}
</style><path class="vbqgll2bl"/>`,
		"fallback": "uix-sharp:chopsticks-rest",
	});
}

export default Component;

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
		"content": `<style>.vdasbhb8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.75V6.5a2.25 2.25 0 0 1 4.5 0v2.25m-4.5 4.5l1.25 5.5a1 1 0 0 0 2 0L7 13.25m2.75-4.5V6.5a2.25 2.25 0 0 1 4.5 0v2.25m-4.5 4.5l1.25 5.5a1 1 0 0 0 2 0l1.25-5.5M17 8.75V6.5a2.25 2.25 0 0 1 4.5 0v2.25m-4.5 4.5l1.25 5.5a1 1 0 0 0 2 0l1.25-5.5m-19-4.5h19v4.5h-19Z");
}
</style><path class="vdasbhb8i"/>`,
		"fallback": "uix-sharp:dental-splint",
	});
}

export default Component;

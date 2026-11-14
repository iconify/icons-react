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
		"content": `<style>.z1upv0bar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8h6l-.5 8.5q-2.5 4-5 0Zm0 0C6.5 3 2.5 4.5 2.5 9.5c0 4.5 4 5 4 1.5M15 8c2.5-5 6.5-3.5 6.5 1.5c0 4.5-4 5-4 1.5");
}
</style><path class="z1upv0bar"/>`,
		"fallback": "uix-sharp:bighorn-sheep",
	});
}

export default Component;

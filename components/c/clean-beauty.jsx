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
		"content": `<style>.nhg9zvbqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18C3 9 8 3 18.5 3C18.5 13 13 18 3 18Zm-1 1l9.5-9.5M18 15q.5 2.5 3 3q-2.5.5-3 3q-.5-2.5-3-3q2.5-.5 3-3Z");
}
</style><path class="nhg9zvbqv"/>`,
		"fallback": "uix-sharp:clean-beauty",
	});
}

export default Component;

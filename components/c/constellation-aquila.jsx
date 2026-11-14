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
		"content": `<style>.ei9yx9b9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm3.5 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5 4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm3.5-5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM4 5.5L6.5 9m1.25 1.75l3.5 2.5M20 5.5L17.5 9m-1.25 1.75l-3.5 2.5m-.75 2v5.25");
}
</style><path class="ei9yx9b9y"/>`,
		"fallback": "uix-sharp:constellation-aquila",
	});
}

export default Component;

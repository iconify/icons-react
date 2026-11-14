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
		"content": `<style>.n6jzo-bdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 6.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm3.75 6.5c2.5 0 4.25 1.25 5 2.75l2.5-.5c1.5-.25 2.25 1.75.75 2.5l-2.75 1c0 2.25-2 3-5.5 3s-5.5-.75-5.5-3l-2.75-1c-1.5-.75-.75-2.75.75-2.5l2.5.5c.75-1.5 2.5-2.75 5-2.75Z");
}
</style><path class="n6jzo-bdl"/>`,
		"fallback": "uix-sharp:claymation",
	});
}

export default Component;

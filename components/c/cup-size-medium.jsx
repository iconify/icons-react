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
		"content": `<style>.f324orzix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6h14v3H5Zm2.5 0l1-2.5h7l1 2.5m-10 3L8 21h8l1.5-12");
}
</style><path class="f324orzix"/>`,
		"fallback": "uix-sharp:cup-size-medium",
	});
}

export default Component;

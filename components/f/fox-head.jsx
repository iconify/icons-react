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
		"content": `<style>.hrk7ikn4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 20.5l-5-6L3 12l1-9l5.5 4.5h5L20 3l1 9l-4 2.5Zm-2.75-8.75h.01m5.49 0h.01");
}
</style><path class="hrk7ikn4v"/>`,
		"fallback": "uix-sharp:fox-head",
	});
}

export default Component;

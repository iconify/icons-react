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
		"content": `<style>.pc_k5lb4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 21.5H3V15h9.9m-.05 0h-8.6V5h9v9.7m-9-6.2h9M8.75 5v3.5M14 18c1.75-2.75 6.25-2.75 8 0c-1.75 2.75-6.25 2.75-8 0Zm4 0h.01");
}
</style><path class="pc_k5lb4k"/>`,
		"fallback": "uix-sharp:display-stock-only",
	});
}

export default Component;

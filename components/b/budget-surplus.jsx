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
		"content": `<style>.p3mtlseaz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h4v4.5h-4Zm6.75-3h4v7.5h-4ZM16 13.4V2.5h4v10.9m-1.5 2.85v5.5M15.75 19h5.5");
}
</style><path class="p3mtlseaz"/>`,
		"fallback": "uix-sharp:budget-surplus",
	});
}

export default Component;

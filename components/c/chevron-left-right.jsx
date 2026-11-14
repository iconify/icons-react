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
		"content": `<style>.k0tp_nbqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 7.5L19 12l-4.5 4.5m-5-9L5 12l4.5 4.5");
}
</style><path class="k0tp_nbqa"/>`,
		"fallback": "uix-sharp:chevron-left-right",
	});
}

export default Component;

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
		"content": `<style>.yfl0u1-0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM3 20.5h18M18 5v10m-2.5-2.5L18 15l2.5-2.5");
}
</style><path class="yfl0u1-0l"/>`,
		"fallback": "uix-sharp:gravity-physics",
	});
}

export default Component;

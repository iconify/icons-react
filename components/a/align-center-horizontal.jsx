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
		"content": `<style>.kos9a4bdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h5.5v17H5ZM13.5 7H19v10h-5.5Zm-11 5H5m5.5 0h3m5.5 0h2.5");
}
</style><path class="kos9a4bdt"/>`,
		"fallback": "uix-sharp:align-center-horizontal",
	});
}

export default Component;

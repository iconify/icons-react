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
		"content": `<style>.vsls6s-8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5.5v3.25a6.5 6.5 0 1 0 4 0V5.5M9.5 3h5v2.5h-5Z");
}
</style><path class="vsls6s-8e"/>`,
		"fallback": "uix-sharp:decanter",
	});
}

export default Component;

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
		"content": `<style>.bcyh9nbyl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9.5h.01m-.01 5h.01M6.5 12h.01m2.99 0h6m-2.25-2.25L15.5 12l-2.25 2.25M18.5 4.5h.01M21 12h.01m-2.51 7.5h.01");
}
</style><path class="bcyh9nbyl"/>`,
		"fallback": "uix-sharp:diffusion",
	});
}

export default Component;

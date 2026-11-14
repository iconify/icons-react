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
		"content": `<style>.pj065w_fb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm2 3.25L9 13.5m4.5-4.25L15 13.5m-11 0h16v4H4Zm1.5 7h13");
}
</style><path class="pj065w_fb"/>`,
		"fallback": "uix-sharp:clone-stamp",
	});
}

export default Component;

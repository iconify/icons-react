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
		"content": `<style>.jjbm1cbvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17V7h-17Zm2 6h13l-1 11h-11Zm4.5 3v5m4-5v5");
}
</style><path class="jjbm1cbvf"/>`,
		"fallback": "uix-sharp:delete",
	});
}

export default Component;

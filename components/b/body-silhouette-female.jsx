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
		"content": `<style>.gcbapbctd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-.75 4.5h5l-1 3.25l3.5 5H7l3.5-5Zm0 0l-3 4.5m8-4.5l3 4.5m-7 3.75v4.5m3-4.5v4.5");
}
</style><path class="gcbapbctd"/>`,
		"fallback": "uix-sharp:body-silhouette-female",
	});
}

export default Component;

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
		"content": `<style>.y84y8xbpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h4m0-3.5h11v7h-11Zm0-1.5v10m11-5h4m0-2.5v5m-11.25-6v2m2.75-2v2");
}
</style><path class="y84y8xbpj"/>`,
		"fallback": "uix-sharp:blood-draw",
	});
}

export default Component;

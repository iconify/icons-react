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
		"content": `<style>.vg2d4pbke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 11h20v4H2Zm2-6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm0 0h6M7 2v9m7-6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm0 0h6m-3-3v9m-6.5 4v6.5m3-6.5v6.5");
}
</style><path class="vg2d4pbke"/>`,
		"fallback": "uix-sharp:choke-manifold",
	});
}

export default Component;

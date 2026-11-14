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
		"content": `<style>.kpc7z8bgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5h18v11H3Zm0 3.75h18M3 18h18m-9-7.5v3.75m-4.5 0V18m9-3.75V18M8 2.5h8v5H8Z");
}
</style><path class="kpc7z8bgl"/>`,
		"fallback": "uix-sharp:build-mode",
	});
}

export default Component;

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
		"content": `<style>.q0i4xsbta {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 2.5l1 10H14m-8.5 0l-1.5 9m9-9l.21 1.888M17.5 13h.01m-.01 2.75V18h2.75l1 2.75m-2.618-.375a2.75 2.75 0 1 1-3.757-3.757");
}
</style><path class="q0i4xsbta"/>`,
		"fallback": "uix-sharp:accessibility-seating",
	});
}

export default Component;

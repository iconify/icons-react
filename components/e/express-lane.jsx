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
		"content": `<style>.cxgu6jbml {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.08 20.5H4.5l-2-11h19l-.429 2.361M7 9.5l3-6m7 6l-3-6m-6.5 9v5m4-5v5m7.5-3.75l-3.75 4.75l5-.5l-3.5 4");
}
</style><path class="cxgu6jbml"/>`,
		"fallback": "uix-sharp:express-lane",
	});
}

export default Component;

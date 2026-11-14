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
		"content": `<style>.z_x6vib6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 14V2.5M7.75 4.75L10 2.5l2.25 2.25M10 14h11m-2.5-2.5L21 14l-2.5 2.5M10 14l-6 6m0-3.5V20h3.5M13 8h2.75v2.75H13Z");
}
</style><path class="z_x6vib6g"/>`,
		"fallback": "uix-sharp:gizmo-move",
	});
}

export default Component;

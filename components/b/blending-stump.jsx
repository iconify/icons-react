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
		"content": `<style>.lu56chbrn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.75 20.25l1.5-5l10-10l5-1.5l-1.5 5l-10 10Zm1.5-5l3.5 3.5m6.5-13.5l3.5 3.5");
}
</style><path class="lu56chbrn"/>`,
		"fallback": "uix-sharp:blending-stump",
	});
}

export default Component;

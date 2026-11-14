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
		"content": `<style>.tu5ponbfp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6V3h3m4 0h4m4 0h3v3m0 4v4m0 4v3h-3m-4 0h-4m-4 0H3v-3m0-4v-4m3.5-3h11v3.5h-11Zm0 6.5h7V17h-7Z");
}
</style><path class="tu5ponbfp"/>`,
		"fallback": "uix-sharp:align-to-selection",
	});
}

export default Component;

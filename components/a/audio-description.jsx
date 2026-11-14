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
		"content": `<style>.dus__385s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18L7 6l4 12m-6.5-4h5m4-8H15a6 6 0 0 1 0 12h-1.5Z");
}
</style><path class="dus__385s"/>`,
		"fallback": "uix-sharp:audio-description",
	});
}

export default Component;

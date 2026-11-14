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
		"content": `<style>.bwk0uvf3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h12v12h-12ZM6 8V6.5a2.5 2.5 0 0 1 5 0V8m7.5 1h1.75v2l1.25 1.5V19a1 1 0 0 1-1 1h-2.25a1 1 0 0 1-1-1v-6.5L18.5 11Zm-16 2.5h12");
}
</style><path class="bwk0uvf3g"/>`,
		"fallback": "uix-sharp:amenity-kit",
	});
}

export default Component;

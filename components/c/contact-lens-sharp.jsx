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
		"content": `<style>.uz7ehacvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 21.25V17.5a5.25 5.25 0 0 1 10.5 0v3.75ZM5.5 5.66a8 8 0 0 0 13 0a1.5 1.5 0 0 0-2.44-1.75a5 5 0 0 1-8.12 0A1.5 1.5 0 0 0 5.5 5.66Z");
}
</style><path class="uz7ehacvd"/>`,
		"fallback": "iconoven:contact-lens-sharp",
	});
}

export default Component;

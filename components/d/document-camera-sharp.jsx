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
		"content": `<style>.h58hk8bdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 18.25h7v3h-7zm3.5 0V5h7m0-2.25h8v4.5h-8zm-1.5 9h9.5v9.5h-9.5z");
}
</style><path class="h58hk8bdh"/>`,
		"fallback": "iconoven:document-camera-sharp",
	});
}

export default Component;

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
		"content": `<style>.urynapbtf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5c3 0 3.5 2 5.5 2c2.5 0 2.5 3 1 4.5c1.5 2 .5 5.5-2.5 5c-1.5 2-5 2-6 0c-3 .5-4.5-2.5-2.5-4.5c-2-2.5 0-5 2-4.5C8 5.5 9 4.5 10 4.5Zm8.25-.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-.75 14.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="urynapbtf"/>`,
		"fallback": "uix-sharp:dirty",
	});
}

export default Component;

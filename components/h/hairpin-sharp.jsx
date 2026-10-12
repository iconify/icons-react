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
		"content": `<style>.whs646bfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 18.5L14.75 5a1.75 1.75 0 0 1 2.75 2m0 0c-.75 1.25-1 1-2 2c-.75 1.25 0 1.75-.75 3c-1 1.25-1.75.75-2.5 2c-1 1.25-.25 1.75-1 3c-1 1.25-1.5 1-2.5 2.25l-.25 1.5");
}
</style><path class="whs646bfe"/>`,
		"fallback": "iconoven:hairpin-sharp",
	});
}

export default Component;

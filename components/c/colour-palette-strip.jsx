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
		"content": `<style>.a0xen7b6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6H7v12H2.5ZM17 6h4.5v12H17ZM9.75 6h4.5v12h-4.5Z");
}
</style><path class="a0xen7b6p"/>`,
		"fallback": "uix-sharp:colour-palette-strip",
	});
}

export default Component;

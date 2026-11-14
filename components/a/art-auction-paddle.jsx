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
		"content": `<style>.dorwbtbpe {
  d: path("M9.5 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.fg5ym7fad {
  d: path("M5 2.5h14v11H5Zm5.25 11h3.5v8h-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fg5ym7fad"/><path class="dorwbtbpe"/></g>`,
		"fallback": "uix-sharp:art-auction-paddle",
	});
}

export default Component;

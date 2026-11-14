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
		"content": `<style>.nljonwlkb {
  d: path("M5 19.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm11 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.p4mh4fb1x {
  d: path("M3 15h18v3H3Zm2-7.5h10V15H5ZM19.5 15V4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p4mh4fb1x"/><path class="nljonwlkb"/></g>`,
		"fallback": "uix-sharp:cart-flatbed-store",
	});
}

export default Component;

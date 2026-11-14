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
		"content": `<style>.gdm0udiad {
  d: path("M4.5 3h15v10h-15Zm0 16.5a7.5 2 0 1 0 15 0a7.5 2 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w7d0inb0b {
  d: path("m8 10l3-3.25L13.5 9L16 6.5");
}
</style><g class="ulnmmdpxh"><path class="gdm0udiad"/><path class="w7d0inb0b"/></g>`,
		"fallback": "uix-sharp:hologram",
	});
}

export default Component;

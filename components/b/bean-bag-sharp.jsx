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
		"content": `<style>.bhfyui12t {
  d: path("M8.25 12.75L12 14.625l3.75-1.875");
}

.nmtyawb_f {
  d: path("M5.25 20.25c-1.75 0-2.25-1.5-1.75-3C4.75 13.25 6.75 8 9 5.5c1.75-2 4.25-2 6 0c2.25 2.5 4.25 7.75 5.5 11.75c.5 1.5 0 3-1.75 3Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nmtyawb_f"/><path class="bhfyui12t"/></g>`,
		"fallback": "iconoven:bean-bag-sharp",
	});
}

export default Component;

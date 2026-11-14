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
		"content": `<style>.a-b_3nb4z {
  d: path("m12 8.75l2.25 3a2.5 2.5 0 1 1-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uyqkx0uyr {
  d: path("M4 20C3 9 9 3 20 4c1 11-5 17-16 16Zm-1.5 1.5L4 20");
}
</style><g class="ulnmmdpxh"><path class="uyqkx0uyr"/><path class="a-b_3nb4z"/></g>`,
		"fallback": "uix-sharp:dewdrop",
	});
}

export default Component;

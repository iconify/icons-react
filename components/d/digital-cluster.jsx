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
		"content": `<style>.mhuvow97a {
  d: path("M2.5 5.5h19v13h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ulrfqkbof {
  d: path("M9 18.5a4 4 0 0 1 0-8m0 4l2.5-2.5M17 9.5V15");
}
</style><g class="ulnmmdpxh"><path class="mhuvow97a"/><path class="ulrfqkbof"/></g>`,
		"fallback": "uix-sharp:digital-cluster",
	});
}

export default Component;

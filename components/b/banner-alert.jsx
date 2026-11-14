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
		"content": `<style>.ho6le9ryx {
  d: path("M3 3h18M4.5 3h15v18L12 17l-7.5 4Z");
}

.k7vzmkvfh {
  d: path("m12 6l4.5 8h-9Zm0 3v2m0 1.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ho6le9ryx"/><path class="k7vzmkvfh"/></g>`,
		"fallback": "uix-sharp:banner-alert",
	});
}

export default Component;

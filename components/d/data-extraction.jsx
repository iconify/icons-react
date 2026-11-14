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
		"content": `<style>.s_3_a8d9a {
  d: path("M5 2.5h6.5L16 7v12a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 19V5A2.5 2.5 0 0 1 5 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wx8a-jgcf {
  d: path("M11.5 2.5V5a2 2 0 0 0 2 2H16M5.5 11h7v4.5h-7Zm7 2.25h9m-2.75-2.75l2.75 2.75L18.75 16");
}
</style><g class="ulnmmdpxh"><path class="s_3_a8d9a"/><path class="wx8a-jgcf"/></g>`,
		"fallback": "uix-sharp:data-extraction",
	});
}

export default Component;

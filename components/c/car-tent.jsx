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
		"content": `<style>.nuid8fzvd {
  d: path("M5 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8 8l4-5.5L16 8v3H8Zm0 0h8");
}

.pc3tomb7n {
  d: path("M2.5 17v-2A1.5 1.5 0 0 1 4 13.5h2.5l2-2.5h7l2.5 2.5h2a1.5 1.5 0 0 1 1.5 1.5v2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pc3tomb7n"/><path class="nuid8fzvd"/></g>`,
		"fallback": "uix-sharp:car-tent",
	});
}

export default Component;

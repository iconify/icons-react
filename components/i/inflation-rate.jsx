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
		"content": `<style>.d1tr83buk {
  d: path("m2.5 8.5l4.5-5l4.5 5V21h-9Z");
}

.o766_1b1f {
  d: path("M5.5 10.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM18 21V3m-3 3l3-3l3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d1tr83buk"/><path class="o766_1b1f"/></g>`,
		"fallback": "uix-sharp:inflation-rate",
	});
}

export default Component;

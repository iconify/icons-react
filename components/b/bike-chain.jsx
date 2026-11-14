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
		"content": `<style>.bi23adoxa {
  d: path("M11.75 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm-5.5 0h.01");
}

.c8w7rkkwg {
  d: path("m5 8.75l8.25-2.5a6 6 0 1 1 0 11.5L5 15.25a3.5 3.5 0 0 1 0-6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8w7rkkwg"/><path class="bi23adoxa"/></g>`,
		"fallback": "uix-sharp:bike-chain",
	});
}

export default Component;

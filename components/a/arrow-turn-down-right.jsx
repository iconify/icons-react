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
		"content": `<style>.cgbkqfb5l {
  d: path("M3.5 5h8a5 5 0 0 1 5 5v9");
}

.ojxamrbwd {
  d: path("m12.5 15l4 4l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cgbkqfb5l"/><path class="ojxamrbwd"/></g>`,
		"fallback": "uix-sharp:arrow-turn-down-right",
	});
}

export default Component;

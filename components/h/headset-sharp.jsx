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
		"content": `<style>.ef4ovwaua {
  d: path("M3.75 12.75h4v6.5h-4zm12.5 0h4v6.5h-4z");
}

.ue5shzbko {
  d: path("M3.75 15v-3a8.25 8.25 0 0 1 16.5 0v3m-2 4.25v2H13.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ue5shzbko"/><path class="ef4ovwaua"/></g>`,
		"fallback": "iconoven:headset-sharp",
	});
}

export default Component;

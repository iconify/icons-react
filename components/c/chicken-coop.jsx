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
		"content": `<style>.bf1dmjbmi {
  d: path("M3.5 9.5L12 3l8.5 6.5V16h-17Z");
}

.h9wvsabak {
  d: path("M10 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-4 5v5m8-5l7.5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bf1dmjbmi"/><path class="h9wvsabak"/></g>`,
		"fallback": "uix-sharp:chicken-coop",
	});
}

export default Component;

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
		"content": `<style>.ujr37bcsi {
  d: path("M13 16.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm5.25 2.25L21 21.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0v63fbwi {
  d: path("M10.3 15.5H2.5V4h17v7.9m0-4.15h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1");
}
</style><g class="ulnmmdpxh"><path class="v0v63fbwi"/><path class="ujr37bcsi"/></g>`,
		"fallback": "uix-sharp:battery-search",
	});
}

export default Component;

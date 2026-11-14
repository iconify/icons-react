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
		"content": `<style>.imrwqub-z {
  d: path("M9.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.isrgbactk {
  d: path("M2.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="isrgbactk"/><path class="imrwqub-z"/></g>`,
		"fallback": "uix-sharp:circles-intersect",
	});
}

export default Component;

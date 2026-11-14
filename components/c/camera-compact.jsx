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
		"content": `<style>.d--8oopma {
  d: path("M3.5 7h17a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1ZM15 7V4.75h4V7");
}

.lyq8hac4w {
  d: path("M9.25 12.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d--8oopma"/><path class="lyq8hac4w"/></g>`,
		"fallback": "uix-sharp:camera-compact",
	});
}

export default Component;

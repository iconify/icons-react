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
		"content": `<style>.fp0jerb6p {
  d: path("M10.5 6H13a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r67lkxbgk {
  d: path("M6 9v6h6V9Z");
}

.tqfrzx00u {
  d: path("m19 10 3 -3v10l-3 -3Z");
}
</style><g class="nrj6p8qat"><path class="fp0jerb6p"/><path class="tqfrzx00u"/><path class="r67lkxbgk"/></g>`,
		"fallback": "iconmind:frame-extract-outline-regular",
	});
}

export default Component;

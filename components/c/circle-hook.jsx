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
		"content": `<style>.i4b1r2bjy {
  d: path("M8 7v8a5 5 0 1 0 3.25-4.75l-.25 3");
}

.ug52ydwyb {
  d: path("M6 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ug52ydwyb"/><path class="i4b1r2bjy"/></g>`,
		"fallback": "uix-sharp:circle-hook",
	});
}

export default Component;

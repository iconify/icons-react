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
		"content": `<style>.gi09erb1h {
  d: path("M4 11h16l-1.5 8.5q-.25 1.5-2 1.5h-9q-1.75 0-2-1.5Zm-.5 0a8.5 8.5 0 0 1 17 0");
}

.hp4xdfb_w {
  d: path("m11 11l.5-1.5l-2.5-3q3 1.5 6 0l-2.5 3L13 11m-8 4.75h14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gi09erb1h"/><path class="hp4xdfb_w"/></g>`,
		"fallback": "uix-sharp:fish-basket",
	});
}

export default Component;

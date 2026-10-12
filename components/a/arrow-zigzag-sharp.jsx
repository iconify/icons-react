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
		"content": `<style>.kxr94xglj {
  d: path("M18.25 9.75L20.5 12l-2.25 2.25");
}

.li2ulccvr {
  d: path("M3.75 12L7 7.5l3.5 9l3.5-9l3 4.5h3.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="li2ulccvr"/><path class="kxr94xglj"/></g>`,
		"fallback": "iconoven:arrow-zigzag-sharp",
	});
}

export default Component;

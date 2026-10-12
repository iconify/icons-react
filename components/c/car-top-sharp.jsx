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
		"content": `<style>.k5s6k3bhg {
  d: path("M8.75 8.75L12 7.125l3.25 1.625M9 17l3 1.125L15 17M6.75 9.25h-2m12.5 0h2");
}

.tme2kebfa {
  d: path("M6.75 2.75h10.5v18.5H6.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tme2kebfa"/><path class="k5s6k3bhg"/></g>`,
		"fallback": "iconoven:car-top-sharp",
	});
}

export default Component;

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
		"content": `<style>.f3n1gfb0c {
  d: path("M2.75 21.25V4.75h18.5v16.5M2.75 16h18.5");
}

.ssx2jj5vk {
  d: path("M8.5 8h7v5h-7zm3.5 5v3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="f3n1gfb0c"/><path class="ssx2jj5vk"/></g>`,
		"fallback": "iconoven:cubicle-sharp",
	});
}

export default Component;

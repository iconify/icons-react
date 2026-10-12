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
		"content": `<style>.a0i1yybpz {
  d: path("M3.75 13a8.25 8.25 0 1 0 16.5 0a8.25 8.25 0 1 0-16.5 0M10 2.75h4m-2 0v2");
}

.rcgf06bjs {
  d: path("m12.95 8.4l-3.9 5.2l-.3.4H12l-.15.48l-.95 3.04l-.15.48l.3-.4l3.9-5.2l.3-.4H12l.15-.48l.95-3.04l.15-.48z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="a0i1yybpz"/><path class="rcgf06bjs"/></g>`,
		"fallback": "iconoven:hiit-workout-sharp",
	});
}

export default Component;

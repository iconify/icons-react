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
		"content": `<style>.c0ocjkhmo {
  d: path("M6.6 4.5h11.3l.3.4l2.65 3.55l.509.661l-.559.619l-8.05 9.12l-.75.85l-.75-.85L3.2 9.73l-.559-.619l.509-.661L5.8 4.9l.3-.4zM3.25 9.25h17.5");
}

.diyq3qh5p {
  d: path("m9 9.25l3 6.5l3-6.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="c0ocjkhmo"/><path class="diyq3qh5p"/></g>`,
		"fallback": "iconoven:diamond-sharp",
	});
}

export default Component;

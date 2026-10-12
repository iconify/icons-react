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
		"content": `<style>.anh94tbsr {
  d: path("M9.75 9.75L6 13.5l3.75 3.75m7.75-10.5v10.5H14V15.5");
}

.kp-1s0buz {
  d: path("M6 6.75h3.75v14.5H6zm-3.25 0h18.5m-17.5 0l4.13-4l6.12 4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kp-1s0buz"/><path class="anh94tbsr"/></g>`,
		"fallback": "iconoven:crane-hook-sharp",
	});
}

export default Component;

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
		"content": `<style>.dqv2xfb4u {
  d: path("M8.75 9.75V6.5a3.25 3.25 0 0 1 6.5 0v3.25");
}

.fo5nwek2p {
  d: path("m5.1 8.4l.094-1.643L6.84 6.75h10.32l1.646.007L18.9 8.4l.7 10.3l.051 2.551l-2.551-.001H6.9l-2.551.001L4.4 18.7Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fo5nwek2p"/><path class="dqv2xfb4u"/></g>`,
		"fallback": "iconoven:bag-sharp",
	});
}

export default Component;

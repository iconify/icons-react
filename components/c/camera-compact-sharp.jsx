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
		"content": `<style>.qkx8wob1u {
  d: path("M2.75 7.25h18.5v12.5H2.75zm2.25-3h4v3H5z");
}

.w4wqpfbkp {
  cx: 14.75px;
  cy: 13.5px;
  r: 3.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqntkvdws {
  d: path("M5.75 10.5h2.5");
}
</style><g class="x2cwu0gfd"><path class="qkx8wob1u"/><circle class="w4wqpfbkp"/><path class="xqntkvdws"/></g>`,
		"fallback": "iconoven:camera-compact-sharp",
	});
}

export default Component;

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
		"content": `<style>.eg3ebxb-d {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM4 9.5L2 12l2 2.5m16-5l2 2.5l-2 2.5M9.5 4.5l2.5-2l2.5 2m-5 15l2.5 2l2.5-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnki9q04d {
  d: path("M6.75 7.5h10.5v9H6.75Z");
}
</style><g class="ulnmmdpxh"><path class="xnki9q04d"/><path class="eg3ebxb-d"/></g>`,
		"fallback": "uix-sharp:camera-pan-tilt",
	});
}

export default Component;

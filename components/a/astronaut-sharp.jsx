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
		"content": `<style>.q71tojf4b {
  cx: 12px;
  cy: 8.25px;
  r: 5.5px;
}

.rnbhx_1yy {
  d: path("M8.75 6h6.5v4.5h-6.5zM5 21.25h15v-1c0-2.6-3.6-4-8-4s-8 1.4-8 4v1zm5.5-2.5h3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="q71tojf4b"/><path class="rnbhx_1yy"/></g>`,
		"fallback": "iconoven:astronaut-sharp",
	});
}

export default Component;

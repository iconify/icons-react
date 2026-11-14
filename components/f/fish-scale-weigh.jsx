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
		"content": `<style>.g51r-ibqx {
  d: path("M8.25 8.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM12 12v3.75M3.5 18.5c3-4 9-4 12 0l4.5-3v6l-4.5-3c-3 4-9 4-12 0ZM12 8.25h.01M7.5 18.5h.01");
}

.nv0ia_o3x {
  d: path("M10.75 3.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nv0ia_o3x"/><path class="g51r-ibqx"/></g>`,
		"fallback": "uix-sharp:fish-scale-weigh",
	});
}

export default Component;

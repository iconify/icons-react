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
		"content": `<style>.b5_k-h_mh {
  d: path("M5.5 2.5h13a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z");
}

.kh3bpxb-g {
  d: path("M10.5 13V8a1.5 1.5 0 0 1 3 0v5a3 3 0 1 1-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b5_k-h_mh"/><path class="kh3bpxb-g"/></g>`,
		"fallback": "uix-sharp:climate-sensor",
	});
}

export default Component;

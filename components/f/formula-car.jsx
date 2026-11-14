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
		"content": `<style>.g5zzmkckq {
  d: path("M3 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm11 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM2.5 5h4m-2 0v5");
}

.q0cjjlbto {
  d: path("M3 13v-3h5.5l1-2h2l1 2l9 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q0cjjlbto"/><path class="g5zzmkckq"/></g>`,
		"fallback": "uix-sharp:formula-car",
	});
}

export default Component;

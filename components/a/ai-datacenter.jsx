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
		"content": `<style>.mi7qntj-k {
  d: path("M3 3h18v7.5H3Zm12.4 18H3v-7.5h18v1.9M7 6.75h.01M7 17.25h.01");
}

.q03s1s14v {
  d: path("M18.5 15.5q0 3 3 3q-3 0-3 3q0-3-3-3q3 0 3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mi7qntj-k"/><path class="q03s1s14v"/></g>`,
		"fallback": "uix-sharp:ai-datacenter",
	});
}

export default Component;

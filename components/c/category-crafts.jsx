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
		"content": `<style>.o2bg3ykzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 3.5h9.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 16.75 7h-9.5A1.75 1.75 0 0 1 5.5 5.25A1.75 1.75 0 0 1 7.25 3.5m0 13.5h9.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 7.25 17M8 7v10m8-10v10m-8-7l8 2.5M8 14l8 2");
}
</style><path class="o2bg3ykzd"/>`,
		"fallback": "uix:category-crafts",
	});
}

export default Component;

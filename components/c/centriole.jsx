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
		"content": `<style>.bd7tvsbmj {
  d: path("M3.5 13a1.5 3 0 1 0 3 0a1.5 3 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tv3lz9l6b {
  d: path("M9 4a3 1.5 0 1 0 6 0a3 1.5 0 1 0-6 0m0 0v6m6-6v6m-6 6v4a3 1.5 0 0 0 6 0v-4M5 10h13.5a1.5 3 0 0 1 0 6H5");
}
</style><g class="hntgybcog"><path class="tv3lz9l6b"/><path class="bd7tvsbmj"/></g>`,
		"fallback": "uix:centriole",
	});
}

export default Component;

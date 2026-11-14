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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k72h-uboc {
  d: path("M18.718 5.282za3.5 3.5 0 0 1 0 4.95l-3.536 3.536a3.5 3.5 0 0 1-4.95 0a3.5 3.5 0 0 1 0-4.95l3.536-3.536a3.5 3.5 0 0 1 4.95 0");
}

.op04h8bbl {
  d: path("M10.232 13.768za1.5 1.5 0 0 1 0 2.121l-2.828 2.829a1.5 1.5 0 0 1-2.122 0a1.5 1.5 0 0 1 0-2.122l2.829-2.828a1.5 1.5 0 0 1 2.121 0m6.011-6.011h.01m-1.955 1.945h.01m-1.954 1.944h.01");
}
</style><g class="hntgybcog"><path class="k72h-uboc"/><path class="op04h8bbl"/></g>`,
		"fallback": "uix:foot-file",
	});
}

export default Component;

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
		"content": `<style>.c7-ijqb2t {
  d: path("m9.75 6.5l6.75 2a3.75 3.75 0 1 1 0 7l-6.75 2a5.75 5.75 0 1 1 0-11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nuyt2iyfm {
  d: path("M5.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m12.25 0h.01");
}
</style><g class="hntgybcog"><path class="c7-ijqb2t"/><path class="nuyt2iyfm"/></g>`,
		"fallback": "uix:belt-drive",
	});
}

export default Component;

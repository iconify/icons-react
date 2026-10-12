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

.qsp7zxbwc {
  d: path("M12 10v8m-2.25 0h4.5M7.5 11.25h9m-9 0l-1 3.25a1.1 1.1 0 0 0 2 0Zm9 0l-1 3.25a1.1 1.1 0 0 0 2 0Z");
}

.z56b4skbs {
  d: path("M3.25 20.25v-11q0-1 .86-1.51l7.03-4.23q.86-.51 1.72 0l7.03 4.23q.86.51.86 1.51v11q0 1-1 1H4.25q-1 0-1-1");
}
</style><g class="hntgybcog"><path class="z56b4skbs"/><path class="qsp7zxbwc"/></g>`,
		"fallback": "iconoven:courthouse",
	});
}

export default Component;

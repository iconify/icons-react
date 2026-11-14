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
		"content": `<style>.a0dstcbpx {
  d: path("M5.5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 8h.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 7.5 11.5H7a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 7 8m5 7.5V8h3.25v7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.icrcbxbfl {
  d: path("M6 4.5h8.5A3.5 3.5 0 0 1 18 8v4a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 12V8A3.5 3.5 0 0 1 6 4.5M18 13h3.5");
}
</style><g class="hntgybcog"><path class="icrcbxbfl"/><path class="a0dstcbpx"/></g>`,
		"fallback": "uix:caravan-trailer",
	});
}

export default Component;

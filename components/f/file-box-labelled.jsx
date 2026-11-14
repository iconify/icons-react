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
		"content": `<style>.cq8jo2bli {
  d: path("M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M4 8l2.5-4h11L20 8Z");
}

.flcescchj {
  d: path("M10.75 12h2.5A1.75 1.75 0 0 1 15 13.75a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 13.75A1.75 1.75 0 0 1 10.75 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cq8jo2bli"/><path class="flcescchj"/></g>`,
		"fallback": "uix:file-box-labelled",
	});
}

export default Component;

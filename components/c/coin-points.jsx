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

.oh34v4i3j {
  d: path("m12.735 8.489l.385.781a1.5 1.5 0 0 0 1.13.821l.862.125a.819.819 0 0 1 .454 1.398l-.624.608a1.5 1.5 0 0 0-.431 1.328l.147.859a.819.819 0 0 1-1.189.864l-.771-.406a1.5 1.5 0 0 0-1.396 0l-.771.406a.819.819 0 0 1-1.189-.864l.147-.859a1.5 1.5 0 0 0-.431-1.328l-.624-.608a.819.819 0 0 1 .454-1.398l.862-.125a1.5 1.5 0 0 0 1.13-.821l.385-.781a.819.819 0 0 1 1.47 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="oh34v4i3j"/></g>`,
		"fallback": "uix:coin-points",
	});
}

export default Component;

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
		"content": `<style>.b1giyo3pl {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5");
}

.b9zbfmu2a {
  d: path("m12.5 14l3 3l3-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qralclxcl {
  d: path("M7 8.5h4.5a4 4 0 0 1 4 4V17");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="qralclxcl"/><path class="b9zbfmu2a"/></g>`,
		"fallback": "uix:drive-through-penalty",
	});
}

export default Component;

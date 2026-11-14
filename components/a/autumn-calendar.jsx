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
		"content": `<style>.eue7xx83f {
  d: path("m12 9l1.5 3l3.75-.75l-1.5 2.75l.25 1.75l-3.25-.5L12 16.5l-.75-1.25l-3.25.5l.25-1.75l-1.5-2.75l3.75.75Zm0 7.5v1.75");
}

.h6huabbyy {
  d: path("M7 4.5h10A3.5 3.5 0 0 1 20.5 8v9.5A3.5 3.5 0 0 1 17 21H7a3.5 3.5 0 0 1-3.5-3.5V8A3.5 3.5 0 0 1 7 4.5m1-2v4m8-4v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h6huabbyy"/><path class="eue7xx83f"/></g>`,
		"fallback": "uix:autumn-calendar",
	});
}

export default Component;

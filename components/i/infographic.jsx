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
		"content": `<style>.c3l4gpujl {
  d: path("M7.5 3.5V8H12m3-2.5h6m-6 5h4M3 20l5-4l5 2l8-4");
}

.dsgkieb5l {
  d: path("M3 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dsgkieb5l"/><path class="c3l4gpujl"/></g>`,
		"fallback": "uix:infographic",
	});
}

export default Component;

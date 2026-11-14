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
		"content": `<style>.fglesrmma {
  d: path("M7.75 7.5h8.5a5.25 5.25 0 0 1 5.25 5.25v3.5a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25v-3.5A5.25 5.25 0 0 1 7.75 7.5m-1.25 0L5 3m12.5 4.5L19 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6mcf9bhx {
  d: path("M11.5 10.25h1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5M5.5 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m10 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="fglesrmma"/><path class="k6mcf9bhx"/></g>`,
		"fallback": "uix:drone-controller",
	});
}

export default Component;

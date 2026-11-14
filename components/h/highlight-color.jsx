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

.md2g9nvaz {
  d: path("m6 15l6-12l6 12m-9.75-4.5h7.5");
}

.ytm6ze8qg {
  fill: currentColor;
  d: path("M7.5 18h9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5A1.5 1.5 0 0 1 7.5 18");
}
</style><g class="hntgybcog"><path class="md2g9nvaz"/><path class="ytm6ze8qg"/></g>`,
		"fallback": "uix:highlight-color",
	});
}

export default Component;

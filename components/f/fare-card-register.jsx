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
		"content": `<style>.gwpoerb8w {
  d: path("M15.5 14.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-11.25-5h4A1.75 1.75 0 0 1 10 11.25v2.5a1.75 1.75 0 0 1-1.75 1.75h-4a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 4.25 9.5M2.5 11.75H10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu-2jk_cj {
  d: path("M15.625 2.5h3.25A2.625 2.625 0 0 1 21.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-3.25A2.625 2.625 0 0 1 13 18.875V5.125A2.625 2.625 0 0 1 15.625 2.5M13 8h8.5");
}
</style><g class="hntgybcog"><path class="vu-2jk_cj"/><path class="gwpoerb8w"/></g>`,
		"fallback": "uix:fare-card-register",
	});
}

export default Component;

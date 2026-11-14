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

.imy2780wd {
  d: path("M12 9.5V5h7");
}

.nbk039d8y {
  d: path("M7.5 14a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m-3.25-3h1.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 5.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 4.25 11m14 0h1.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 19.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 18.25 11");
}
</style><g class="hntgybcog"><path class="nbk039d8y"/><path class="imy2780wd"/></g>`,
		"fallback": "uix:ball-valve",
	});
}

export default Component;

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

.i607cjbzn {
  d: path("M2.75 9.5a9.25 3.75 0 0 1 18.5 0V16a9.25 3.75 0 0 1-18.5 0Z");
}

.oxn425hfr {
  d: path("M2.75 9.5a9.25 3.75 0 0 0 18.5 0m-11 7h3.5");
}
</style><g class="hntgybcog"><path class="i607cjbzn"/><path class="oxn425hfr"/></g>`,
		"fallback": "iconoven:cake-pan",
	});
}

export default Component;

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
		"content": `<style>.gebmzgbgj {
  d: path("M16.5 4.5c1.25 1.5 2 2.75 2 4.75a2 2 0 0 1-4 0c0-2 .75-3.25 2-4.75");
}

.gjqabdb8d {
  d: path("m3 21l10.14-8.14M11.75 5.5v4a4.75 4.75 0 0 0 9.5 0v-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gjqabdb8d"/><path class="gebmzgbgj"/></g>`,
		"fallback": "iconoven:fruit-picker",
	});
}

export default Component;

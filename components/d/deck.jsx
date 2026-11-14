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

.s03df9b0k {
  d: path("M4.5 12.75v8.75m9-8.75v8.75M2.5 5h13m0 7.75H18V17h3.5v4.5m-19 0h19M6 5v6m3-6v6m3-6v6");
}

.to0iykbaz {
  fill: currentColor;
  d: path("M3.375 11h11.25a.875.875 0 0 1 .875.875a.875.875 0 0 1-.875.875H3.375a.875.875 0 0 1-.875-.875a.875.875 0 0 1 .875-.875");
}
</style><g class="hntgybcog"><path class="to0iykbaz"/><path class="s03df9b0k"/></g>`,
		"fallback": "uix:deck",
	});
}

export default Component;

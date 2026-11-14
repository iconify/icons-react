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

.jdxpw7b8x {
  d: path("m15.25 10.25l-1.537 2.854a1.5 1.5 0 0 1-.609.609L10.25 15.25a1.107 1.107 0 0 1-1.5-1.5l1.537-2.854a1.5 1.5 0 0 1 .609-.609L13.75 8.75a1.107 1.107 0 0 1 1.5 1.5m-4.75.25l3 3");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="jdxpw7b8x"/></g>`,
		"fallback": "uix:explore-grid",
	});
}

export default Component;

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
		"content": `<style>.d0bgtwhch {
  d: path("M4 12q3.5 3.5 0 7m7-7q-3.5 3.5 0 7m2.5-12H21m0-4.5V12m-6.5-5l1.25 5.5h3L20 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sao9cvb4o {
  d: path("M2.5 15.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0m0 0h10");
}
</style><g class="hntgybcog"><path class="sao9cvb4o"/><path class="d0bgtwhch"/></g>`,
		"fallback": "uix:basketball-shoot-around",
	});
}

export default Component;

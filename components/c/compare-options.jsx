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
		"content": `<style>.al4s12btf {
  d: path("M5.125 3h2.75A2.625 2.625 0 0 1 10.5 5.625v12.75A2.625 2.625 0 0 1 7.875 21h-2.75A2.625 2.625 0 0 1 2.5 18.375V5.625A2.625 2.625 0 0 1 5.125 3m11 0h2.75A2.625 2.625 0 0 1 21.5 5.625v12.75A2.625 2.625 0 0 1 18.875 21h-2.75a2.625 2.625 0 0 1-2.625-2.625V5.625A2.625 2.625 0 0 1 16.125 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pqlbb9zeg {
  d: path("m16 12.5l1.5 1.5l1.5-2.75");
}
</style><g class="hntgybcog"><path class="al4s12btf"/><path class="pqlbb9zeg"/></g>`,
		"fallback": "uix:compare-options",
	});
}

export default Component;

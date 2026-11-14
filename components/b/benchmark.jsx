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

.ohfkybcbe {
  fill: currentColor;
  d: path("M10.75 16.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.sk02_rbjg {
  fill: currentColor;
  d: path("M19.737 9.513za.75.75 0 0 1 0 1.06l-1.591 1.591a.75.75 0 0 1-1.06 0a.75.75 0 0 1 0-1.06l1.591-1.591a.75.75 0 0 1 1.06 0");
}

.xl5onfbxd {
  d: path("M2.5 16.5a9.5 9.5 0 0 1 19 0m-19 0h19");
}

.xlrgsobgu {
  d: path("m12 16.5l3.5-6");
}
</style><g class="hntgybcog"><path class="xl5onfbxd"/><path class="sk02_rbjg"/><path class="xlrgsobgu"/><path class="ohfkybcbe"/></g>`,
		"fallback": "uix:benchmark",
	});
}

export default Component;

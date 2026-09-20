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
		"content": `<style>.c1si20bso {
  d: path("M10 9v6");
}

.h4gumgb9f {
  d: path("M7 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.wihdixnjz {
  d: path("M14 9v6");
}
</style><g class="hntgybcog"><path class="h4gumgb9f"/><path class="c1si20bso"/><path class="wihdixnjz"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:device-code-flow-outline-thin",
	});
}

export default Component;

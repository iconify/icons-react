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
		"content": `<style>.dmxgz3b-u {
  d: path("M13 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0M2.5 9h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iyi5yyb1s {
  fill: currentColor;
  d: path("M3 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="iyi5yyb1s"/><path class="dmxgz3b-u"/></g>`,
		"fallback": "uix:anaglyph-glasses",
	});
}

export default Component;

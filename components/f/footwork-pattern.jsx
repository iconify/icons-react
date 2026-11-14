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
		"content": `<style>.eue6xhi8g {
  d: path("M3.5 20L9 14l5 4.5l6-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yyma06bew {
  d: path("M16.75 11.75L20 11.5l.25 3.25M3.75 8.5a2.25 3.5 0 1 0 4.5 0a2.25 3.5 0 1 0-4.5 0m7.5-1a2.25 3.5 0 1 0 4.5 0a2.25 3.5 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="eue6xhi8g"/><path class="yyma06bew"/></g>`,
		"fallback": "uix:footwork-pattern",
	});
}

export default Component;

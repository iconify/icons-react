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
		"content": `<style>.c2-gs7b7d {
  d: path("m15 9 -3 3h2.5l-3 3");
}

.ex6sma95g {
  d: path("M8 3h8l5 5v8l-5 5H8l-5 -5V8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ex6sma95g"/><path class="c2-gs7b7d"/></g>`,
		"fallback": "iconmind:crypto-coin-outline-thin",
	});
}

export default Component;

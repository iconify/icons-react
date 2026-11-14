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
		"content": `<style>.gwas7katj {
  d: path("M2.5 17V9a2 2 0 0 1 2-2H16l5.5 5.5V17Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qvaeq0cby {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 10h2a1.5 1.5 0 0 1 1.5 1.5v.5A1.5 1.5 0 0 1 9 13.5H7A1.5 1.5 0 0 1 5.5 12v-.5A1.5 1.5 0 0 1 7 10");
}
</style><g class="hntgybcog"><path class="gwas7katj"/><path class="qvaeq0cby"/></g>`,
		"fallback": "uix:campervan",
	});
}

export default Component;

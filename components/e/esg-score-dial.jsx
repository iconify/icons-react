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

.nt-7_ibzp {
  d: path("M2.5 15.5a9.5 9.5 0 0 1 19 0");
}

.wo0gel19g {
  d: path("M10.25 15.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3.25-1l4-3");
}
</style><g class="hntgybcog"><path class="nt-7_ibzp"/><path class="wo0gel19g"/></g>`,
		"fallback": "uix:esg-score-dial",
	});
}

export default Component;

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

.p5svho3ut {
  fill: currentColor;
  d: path("M3.5 11h17a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1a1 1 0 0 1 1-1");
}

.p8-4cab4c {
  d: path("M2.5 8c3-5.5 6-5.5 7.5 0s2.5 13.5 5.5 13.5s4-5.5 6-6.5");
}
</style><g class="hntgybcog"><path class="p5svho3ut"/><path class="p8-4cab4c"/></g>`,
		"fallback": "uix:chart-baseline",
	});
}

export default Component;

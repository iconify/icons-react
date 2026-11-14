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
		"content": `<style>.dkeub64dj {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5M10.75 14c-3.25-.5-3.75-5.5-2-8.5M8 10.75l-1.25-2M9 13l-1.75-.75m6 1.75c3.25-.5 3.75-5.5 2-8.5m.75 5.25l1.25-2M15 13l1.75-.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n13x6dbmu {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19");
}
</style><g class="hntgybcog"><path class="n13x6dbmu"/><path class="dkeub64dj"/></g>`,
		"fallback": "uix:classic-literature",
	});
}

export default Component;

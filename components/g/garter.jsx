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
		"content": `<style>.bfkrooexj {
  d: path("M2.5 14.5a9.5 6 0 1 0 19 0a9.5 6 0 1 0-19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mt2em6bzd {
  d: path("M6 14.5a6 3 0 1 0 12 0a6 3 0 1 0-12 0m6-6l-3.5-5l-1 3Zm0 0l3.5-5l1 3Z");
}
</style><g class="hntgybcog"><path class="bfkrooexj"/><path class="mt2em6bzd"/></g>`,
		"fallback": "uix:garter",
	});
}

export default Component;

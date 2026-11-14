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
		"content": `<style>.gont80nhj {
  d: path("M2.5 7.75a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0M16.125 13h2.75a2.625 2.625 0 0 1 2.625 2.625v3.25a2.625 2.625 0 0 1-2.625 2.625h-2.75a2.625 2.625 0 0 1-2.625-2.625v-3.25A2.625 2.625 0 0 1 16.125 13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwzc5-b4v {
  d: path("M5.75 7.75a2 5.25 0 1 0 4 0a2 5.25 0 1 0-4 0m-3.25 0H13m.5 9.5h8M5 16v2.5h5.5m-1.75-1.75l1.75 1.75l-1.75 1.75");
}
</style><g class="hntgybcog"><path class="gont80nhj"/><path class="zwzc5-b4v"/></g>`,
		"fallback": "uix:dns-lookup",
	});
}

export default Component;

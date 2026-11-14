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
		"content": `<style>.et8e2ibpf {
  d: path("M8.25 4h7.5A5.25 5.25 0 0 1 21 9.25v5.5A5.25 5.25 0 0 1 15.75 20h-7.5A5.25 5.25 0 0 1 3 14.75v-5.5A5.25 5.25 0 0 1 8.25 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ht87frfxh {
  d: path("M7.5 8.25zA1.5 1.5 0 0 1 9 9.75v4.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-4.5a1.5 1.5 0 0 1 1.5-1.5m9 0za1.5 1.5 0 0 1 1.5 1.5v4.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-4.5a1.5 1.5 0 0 1 1.5-1.5M9 12h6");
}
</style><g class="hntgybcog"><path class="et8e2ibpf"/><path class="ht87frfxh"/></g>`,
		"fallback": "uix:high-protein-mark",
	});
}

export default Component;

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
		"content": `<style>.c8hmcy6ke {
  d: path("m3 6l3 8h7.5l3 4.5M5.75 10.75h4.75M7.5 14v5.5M12 14v5.5m-6.5 0H14m6 2v-18h-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjasm2neh {
  d: path("M17 5.5za1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 17 10.5a1.75 1.75 0 0 1-1.75-1.75v-1.5A1.75 1.75 0 0 1 17 5.5");
}
</style><g class="hntgybcog"><path class="c8hmcy6ke"/><path class="vjasm2neh"/></g>`,
		"fallback": "uix:infusion-chair",
	});
}

export default Component;

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
		"content": `<style>.gnb7is90h {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-12.5-6h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i76he_blj {
  d: path("M2.5 16.5v-11A1.5 1.5 0 0 1 4 4h2l3.5 5.5H20a1.5 1.5 0 0 1 1.5 1.5v5.5Z");
}
</style><g class="hntgybcog"><path class="i76he_blj"/><path class="gnb7is90h"/></g>`,
		"fallback": "uix:car-bed",
	});
}

export default Component;

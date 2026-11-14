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
		"content": `<style>.d8smm3uad {
  d: path("M8.5 18.75c0-5.25 1-9.25 2.5-12.25m0 0c-2.5-1.5-6-1-8 2m8-2c2.5-2.25 6-2 8 1m-8-1c-.75-2-2-3.5-3.75-4m8.75 16c0-3 .5-5 1.75-6.5m0 0c1.25-1.5 3-1.25 3.75.5m-3.75-.5c-1.25-1.25-3-1-3.75.5");
}

.grj6w1bva {
  d: path("M2.5 20.5c4.5-3 14.5-3 19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d8smm3uad"/><path class="grj6w1bva"/></g>`,
		"fallback": "uix:beach-palms",
	});
}

export default Component;

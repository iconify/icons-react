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
		"content": `<style>.e6b9y8b8v {
  d: path("M14 20.5h1.25l4.25-5h2m-1.25-1.25l1.25 1.25l-1.25 1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jdsh-kpie {
  d: path("M5.5 2.5h9V7a4.5 4.5 0 0 1-9 0Z");
}

.wkh9e3b7w {
  d: path("M5.5 4.5H3V6a3.5 3.5 0 0 0 3.25 3.5m8.25-5H17V6a3.5 3.5 0 0 1-3.25 3.5m-3.75 2v6m-3.5 0h5.6m1.9-2h1.25l4.25 5h2m-1.25-1.25l1.25 1.25l-1.25 1.25");
}
</style><g class="hntgybcog"><path class="jdsh-kpie"/><path class="wkh9e3b7w"/><path class="e6b9y8b8v"/></g>`,
		"fallback": "uix:cup-draw",
	});
}

export default Component;

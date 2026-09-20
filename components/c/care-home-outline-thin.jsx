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

.hwufvfb8q {
  d: path("M3 20v-8l9 -9 9 9v8Z");
}

.tn05jsbtd {
  d: path("M7 13a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0l-5 5Z");
}
</style><g class="hntgybcog"><path class="hwufvfb8q"/><path class="tn05jsbtd"/></g>`,
		"fallback": "iconmind:care-home-outline-thin",
	});
}

export default Component;

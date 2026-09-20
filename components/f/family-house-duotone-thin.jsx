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
		"content": `<style>.bw1t57bti {
  fill: currentColor;
  d: path("M3 20v-8l9 -9 9 9v8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.di1jgfeil {
  d: path("M16 8V4h3v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hwufvfb8q {
  d: path("M3 20v-8l9 -9 9 9v8Z");
}

.tcb1h8bbm {
  d: path("M9 20v-6h6v6");
}
</style><g class="hntgybcog"><path class="bw1t57bti"/><path class="hwufvfb8q"/><path class="di1jgfeil"/><path class="tcb1h8bbm"/></g>`,
		"fallback": "iconmind:family-house-duotone-thin",
	});
}

export default Component;

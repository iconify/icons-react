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
		"content": `<style>.bcigp9a4c {
  d: path("M3.75 20.25h5v-5h5v-5h3.5V4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z9g08dbag {
  d: path("m14.25 7.5l3-3l3 3");
}
</style><g class="hntgybcog"><path class="bcigp9a4c"/><path class="z9g08dbag"/></g>`,
		"fallback": "iconoven:arrow-step-up",
	});
}

export default Component;

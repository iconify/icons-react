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
		"content": `<style>.bckix3qhv {
  d: path("M3.5 19.5v-14l17 5.5v8.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uy514mbsq {
  d: path("M12 19.5v-4.25m0 .75c0-2.5-2-4-4.5-4c0 2.5 2 4 4.5 4m0-.75c0-2 1.75-3 3.75-3c0 2.25-1.5 3-3.75 3");
}
</style><g class="hntgybcog"><path class="bckix3qhv"/><path class="uy514mbsq"/></g>`,
		"fallback": "uix:cold-frame",
	});
}

export default Component;

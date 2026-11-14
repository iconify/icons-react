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
		"content": `<style>.cbud2f8ew {
  d: path("M5.5 2.5v19m-3-16h19M7 5.5h12A1.5 1.5 0 0 1 20.5 7v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V7A1.5 1.5 0 0 1 7 5.5");
}

.fy7kwnb7a {
  d: path("M7 5.5h3A1.5 1.5 0 0 1 11.5 7v3a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 10V7A1.5 1.5 0 0 1 7 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cbud2f8ew"/><path class="fy7kwnb7a"/></g>`,
		"fallback": "uix:align-to-artboard",
	});
}

export default Component;

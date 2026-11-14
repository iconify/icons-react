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
		"content": `<style>.a78k-kbej {
  d: path("M13 12c0-2.5 1-4 2.5-4S18 9.5 18 12l.5 3.5l-1.75-2L15.5 16l-1.25-2.5l-1.75 2Zm-8 3c2 0 3.5 1.5 4 4c-2-.5-3.5-2-4-4");
}

.fhe0s72gk {
  d: path("M5 21.5V11c0-5 2.5-7.5 6-7.5c3 0 4.5 2 4.5 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fhe0s72gk"/><path class="a78k-kbej"/></g>`,
		"fallback": "uix:flower-wilted",
	});
}

export default Component;

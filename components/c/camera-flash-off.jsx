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

.md02fs7is {
  d: path("m3.25 3.25l17.5 17.5");
}

.qxli-nb_m {
  d: path("M3.25 9.25a2 2 0 0 1 2-2h2.1l1.1-1.85a1.5 1.5 0 0 1 1.3-.75h4.5a1.5 1.5 0 0 1 1.3.75l1.1 1.85h2.1a2 2 0 0 1 2 2v8.5a2.5 2.5 0 0 1-2.5 2.5H5.75a2.5 2.5 0 0 1-2.5-2.5Z");
}

.v-o_6u8ph {
  cx: 12px;
  cy: 13.25px;
  r: 3.5px;
}
</style><g class="hntgybcog"><path class="qxli-nb_m"/><circle class="v-o_6u8ph"/><path class="md02fs7is"/></g>`,
		"fallback": "iconoven:camera-flash-off",
	});
}

export default Component;

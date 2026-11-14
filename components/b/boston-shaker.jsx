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
		"content": `<style>.bwtvx7ufc {
  d: path("m8 12l1.5-9.5h5L16 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mdsufubog {
  d: path("M8.657 12h6.686a1.75 1.75 0 0 1 1.713 2.111l-1.263 6A1.75 1.75 0 0 1 14.08 21.5H9.92a1.75 1.75 0 0 1-1.713-1.389l-1.263-6A1.75 1.75 0 0 1 8.657 12");
}
</style><g class="hntgybcog"><path class="mdsufubog"/><path class="bwtvx7ufc"/></g>`,
		"fallback": "uix:boston-shaker",
	});
}

export default Component;

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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.n1hqbb0bf {
  d: path("M4 1L4 23");
}

.xabcc59wk {
  fill: currentColor;
  d: path("M4 3L20 3C20.5523 3 21 3.4477 21 4C21 4.1612 20.961 4.32 20.8864 4.4629L17.9949 10L20.8864 15.5371C20.961 15.68 21 15.8388 21 16C21 16.5523 20.5523 17 20 17L4 17C3.4477 17 3 16.5523 3 16L3 4C3 3.4477 3.4477 3 4 3Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="xabcc59wk"/><path class="n1hqbb0bf"/></g>`,
		"fallback": "keyline-icons:flag-swallowtail-sharp-fill",
	});
}

export default Component;

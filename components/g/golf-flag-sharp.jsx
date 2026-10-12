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
		"content": `<style>.fx05sjbwb {
  cx: 18.5px;
  cy: 18.25px;
  r: 1.75px;
}

.k3kt6vuqp {
  d: path("M9 18.25v-15m.68.31l5.89 2.63l.68.31l-.68.31l-5.89 2.63l-.68.31v-6.5zM3.25 18.25C3.25 17.01 5.82 16 9 16s5.75 1.01 5.75 2.25S12.18 20.5 9 20.5s-5.75-1.01-5.75-2.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="k3kt6vuqp"/><circle class="fx05sjbwb"/></g>`,
		"fallback": "iconoven:golf-flag-sharp",
	});
}

export default Component;

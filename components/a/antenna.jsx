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
		"content": `<style>.hcvh8hlqn {
  d: path("M7.75 21.25L12 8.75l4.25 12.5m-6.75-5h5M8.52 9.69a4.25 4.25 0 0 1 0-4.88m-2.66 6.74a7.5 7.5 0 0 1 0-8.6m9.62 1.86a4.25 4.25 0 0 1 0 4.88m2.66-6.74a7.5 7.5 0 0 1 0 8.6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kx85uxbfn {
  cx: 12px;
  cy: 7.25px;
  r: 1.5px;
}
</style><g class="hntgybcog"><circle class="kx85uxbfn"/><path class="hcvh8hlqn"/></g>`,
		"fallback": "iconoven:antenna",
	});
}

export default Component;

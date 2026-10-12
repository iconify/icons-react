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
		"content": `<style>.fhhou0bqf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.895 10.01h.01");
}

.whqn7xzzh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.65 9.01a3.36 3.36 0 1 1 4.7 0a3.36 3.36 0 1 1 1.45 4.48a3.36 3.36 0 1 1-3.8 2.76a3.36 3.36 0 1 1-3.8-2.76a3.36 3.36 0 1 1 1.45-4.48M12 12.25l5.47-1.78");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="whqn7xzzh"/><path class="fhhou0bqf"/></g>`,
		"fallback": "iconoven:hibiscus",
	});
}

export default Component;

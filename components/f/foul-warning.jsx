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
		"content": `<style>.nm-fqreeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.426 4.076l6.108 2.223a1.75 1.75 0 0 1 1.046 2.243l-3.763 10.336a1.75 1.75 0 0 1-2.243 1.046l-6.108-2.223a1.75 1.75 0 0 1-1.046-2.243L8.183 5.122a1.75 1.75 0 0 1 2.243-1.046M19 13.5v5m0 3h.01");
}
</style><path class="nm-fqreeg"/>`,
		"fallback": "uix:foul-warning",
	});
}

export default Component;

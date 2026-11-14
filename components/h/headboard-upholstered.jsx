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
		"content": `<style>.g11-o1ird {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21V7a3 3 0 0 1 6 0v14m0-7h10.5a2 2 0 0 1 2 2v5M9 18h12.5M6 9.5h.01M6 14h.01");
}
</style><path class="g11-o1ird"/>`,
		"fallback": "uix:headboard-upholstered",
	});
}

export default Component;

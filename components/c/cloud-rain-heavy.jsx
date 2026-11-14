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
		"content": `<style>.q_yva6bjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 15.5a4 4 0 0 1 0-8a5.5 5.5 0 0 1 11 1a3.5 3.5 0 0 1-1 7ZM6.5 18l-1 3.5m5-3.5l-1 3.5m5-3.5l-1 3.5m5-3.5l-1 3.5");
}
</style><path class="q_yva6bjk"/>`,
		"fallback": "uix:cloud-rain-heavy",
	});
}

export default Component;

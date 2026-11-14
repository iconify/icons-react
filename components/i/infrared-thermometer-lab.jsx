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
		"content": `<style>.m_hamvxpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h11v5.5h-5l-1 8.5H3l1-8.5H2.5Zm13.75 2.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 0h.01");
}
</style><path class="m_hamvxpt"/>`,
		"fallback": "uix:infrared-thermometer-lab",
	});
}

export default Component;

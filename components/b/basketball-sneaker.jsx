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
		"content": `<style>.njugszb7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3h6.5l.5 6.5l7.5 4a3 3 0 0 1 2.5 3V20H3ZM3 17h18M3 7h7.75");
}
</style><path class="njugszb7e"/>`,
		"fallback": "uix:basketball-sneaker",
	});
}

export default Component;

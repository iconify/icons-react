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
		"content": `<style>.wcu99jbco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8a5.5 5.5 0 1 0 11 0A5.5 5.5 0 1 0 9 8M2.5 18.5a6 3 0 1 0 12 0a6 3 0 1 0-12 0m6 0h.01");
}
</style><path class="wcu99jbco"/>`,
		"fallback": "uix:ball-marker",
	});
}

export default Component;

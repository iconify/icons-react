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
		"content": `<style>.atl_qwbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.25 7.25a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M2.5 21.5c.5-6.5 3-10.25 7-12m6-3.5h.01");
}
</style><path class="atl_qwbek"/>`,
		"fallback": "uix:golf-ball-flight",
	});
}

export default Component;

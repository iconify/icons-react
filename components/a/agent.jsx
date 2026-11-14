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
		"content": `<style>.kqk0f291x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 6.5h5.5A5.25 5.25 0 0 1 20 11.75v3.5a5.25 5.25 0 0 1-5.25 5.25h-5.5A5.25 5.25 0 0 1 4 15.25v-3.5A5.25 5.25 0 0 1 9.25 6.5M12 2.75V6.5m-3 6h.01m5.99 0h.01");
}
</style><path class="kqk0f291x"/>`,
		"fallback": "uix:agent",
	});
}

export default Component;

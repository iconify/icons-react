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
		"content": `<style>.yqg9lmbkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 17v-5a5 5 0 0 1 10 0v5Zm-.25 0h10.5A1.75 1.75 0 0 1 19 18.75a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 18.75A1.75 1.75 0 0 1 6.75 17M12 2.5v2M2.5 12h2m15 0h2m-17-7.5L6 6m13.5-1.5L18 6");
}
</style><path class="yqg9lmbkn"/>`,
		"fallback": "uix:ambulance-siren",
	});
}

export default Component;

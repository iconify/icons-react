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
		"content": `<style>.hzcv4x1_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.384 5.643l4.977-2.342a1.5 1.5 0 0 1 1.278 0l4.977 2.342a1.5 1.5 0 0 1 0 2.714l-4.977 2.342a1.5 1.5 0 0 1-1.278 0L6.384 8.357a1.5 1.5 0 0 1 0-2.714M20.5 7v4M6.25 14h11.5a1.75 1.75 0 0 1 1.75 1.75v3.5A1.75 1.75 0 0 1 17.75 21H6.25a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 6.25 14m3.25 0v7m5-7v7");
}
</style><path class="hzcv4x1_s"/>`,
		"fallback": "uix:film-school",
	});
}

export default Component;

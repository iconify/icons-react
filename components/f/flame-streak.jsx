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
		"content": `<style>.l4m_fubpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 19.25c-3.5 0-6-2.25-6-5.5c0-3.5 3-5.25 4-9C13.25 6 14 7.5 14 9.5c1.25-.75 2.25-1.75 2.25-3c2.5 1.75 3.75 4.25 3.75 7.25c0 3.25-2.5 5.5-6 5.5M2.5 12H5m-1.5 4h1.75M4.5 8h1.25");
}
</style><path class="l4m_fubpc"/>`,
		"fallback": "uix:flame-streak",
	});
}

export default Component;

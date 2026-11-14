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
		"content": `<style>.rpztq81xp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 2.5h9.75A2.625 2.625 0 0 1 19.5 5.125v11.75a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 16.875V5.125A2.625 2.625 0 0 1 7.125 2.5m-.625 17v2m11-2v2M4.5 8.25h15m-15 5.5h15m-5.5 3.5l2.5-1.5M13.25 6l2.5-1.5");
}
</style><path class="rpztq81xp"/>`,
		"fallback": "uix:glass-showcase",
	});
}

export default Component;

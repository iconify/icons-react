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
		"content": `<style>.rdwdbdboa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 10.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3 21.5c0-3.25 3.25-5 7.5-5s7.5 1.75 7.5 5m1.5-10a7.5 7.5 0 0 0-.75-3.25m-1-1.5a7.5 7.5 0 0 0-2.5-2m-2-.75a7.5 7.5 0 0 0-3.25.25m2-1.75l-2 1.75L12 6");
}
</style><path class="rdwdbdboa"/>`,
		"fallback": "uix:boxer-slip",
	});
}

export default Component;

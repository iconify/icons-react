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
		"content": `<style>.c_qzmbcqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19m-9.5 0v2.25m-1.283 0h2.566a1.5 1.5 0 0 1 1.468 1.191l.368 1.75A1.5 1.5 0 0 1 13.651 9.5h-3.302a1.5 1.5 0 0 1-1.468-1.809l.368-1.75a1.5 1.5 0 0 1 1.468-1.191M8.5 12l-4.25 7.5M15.5 12l4.25 7.5m-15.5 0a7.75 2 0 1 0 15.5 0a7.75 2 0 1 0-15.5 0");
}
</style><path class="c_qzmbcqy"/>`,
		"fallback": "uix:display-light-spot",
	});
}

export default Component;

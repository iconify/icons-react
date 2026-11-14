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
		"content": `<style>.lzczsabmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 18V4A1.5 1.5 0 0 1 6 2.5h12A1.5 1.5 0 0 1 19.5 4v14M4.75 18h14.5A1.75 1.75 0 0 1 21 19.75a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19.75A1.75 1.75 0 0 1 4.75 18m3-4l2-5m1 5l2-5m1 5l2-5");
}
</style><path class="lzczsabmk"/>`,
		"fallback": "uix:cat-scratcher-cardboard",
	});
}

export default Component;

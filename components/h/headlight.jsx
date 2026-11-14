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
		"content": `<style>.h1tnyjbmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 5h-3a7 7 0 0 0 0 14h3Zm3 3l5-1.5M16 12h5m-5 4l5 1.5");
}
</style><path class="h1tnyjbmr"/>`,
		"fallback": "uix:headlight",
	});
}

export default Component;

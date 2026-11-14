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
		"content": `<style>.a6rufac2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5V11m-3 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 3v4.5m4.75-11l2.5-1.5m1.75-3.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><path class="a6rufac2s"/>`,
		"fallback": "uix:git-detached",
	});
}

export default Component;

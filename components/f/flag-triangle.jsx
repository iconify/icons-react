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
		"content": `<style>.qqx_kmb3b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.831 4.82l6.477 2.279a1.75 1.75 0 0 1 0 3.302L8.831 12.68A1.75 1.75 0 0 1 6.5 11.029V6.471A1.75 1.75 0 0 1 8.831 4.82M6.5 3v18");
}
</style><path class="qqx_kmb3b"/>`,
		"fallback": "uix:flag-triangle",
	});
}

export default Component;

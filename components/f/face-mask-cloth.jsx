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
		"content": `<style>.kdk-ougga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8C9 6.5 15 6.5 18.5 8v6.5c-3.5 3-9.5 3-13 0Zm0 1c-2.75 0-2.75 4.5 0 4.5m13-4.5c2.75 0 2.75 4.5 0 4.5m-10-3h7m-6 2.75h5");
}
</style><path class="kdk-ougga"/>`,
		"fallback": "uix:face-mask-cloth",
	});
}

export default Component;

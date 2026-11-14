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
		"content": `<style>.co2p550nh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 21l.75-11h3.5l.75 11Zm-1-11h7m-5 0V6.5l1.5-3l1.5 3V10m3-5.5l5-2V9l-5-2Zm-3 1.25h3");
}
</style><path class="co2p550nh"/>`,
		"fallback": "uix-sharp:call-to-prayer-speaker",
	});
}

export default Component;

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
		"content": `<style>.ze_ghp__e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h5m0 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m7 0h7m-18 6.5v2m8.5-2v2m8.5-2v2");
}
</style><path class="ze_ghp__e"/>`,
		"fallback": "uix:fine-tune",
	});
}

export default Component;

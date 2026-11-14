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
		"content": `<style>.de06tuk5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h5l1.5 2.5h5L16 12h5v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm7.75-6h2.5A1.75 1.75 0 0 1 15 7.75v1a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 8.75v-1A1.75 1.75 0 0 1 10.75 6m-.5 0V4.75a1.75 1.75 0 0 1 3.5 0V6");
}
</style><path class="de06tuk5c"/>`,
		"fallback": "uix:inbox-lock",
	});
}

export default Component;

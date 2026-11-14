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
		"content": `<style>.n_fabcdvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h.25A2.625 2.625 0 0 1 8.5 5.625v12.75A2.625 2.625 0 0 1 5.875 21h-.25A2.625 2.625 0 0 1 3 18.375V5.625A2.625 2.625 0 0 1 5.625 3M10 15.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M2.5 21h19m-13-5.5H10m5.5 0L18.25 4M15.5 15.5h.01");
}
</style><path class="n_fabcdvc"/>`,
		"fallback": "uix:bike-share-dock",
	});
}

export default Component;

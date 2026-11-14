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
		"content": `<style>.d8xx1rpid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.229 12.253l-3.01 8.27l-9.397-3.42L8.781 3.477l9.397 3.42l-1.402 3.853M19 13.5v5m0 3h.01");
}
</style><path class="d8xx1rpid"/>`,
		"fallback": "uix-sharp:foul-warning",
	});
}

export default Component;

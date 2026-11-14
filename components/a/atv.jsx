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
		"content": `<style>.qeq26elxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm12 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 12.5c1-1.25 2.25-2 4-2h2l1 2h5l1-2h2c1.75 0 3 .75 4 2m-13-4h4m3 2l1-4H19");
}
</style><path class="qeq26elxh"/>`,
		"fallback": "uix-sharp:atv",
	});
}

export default Component;

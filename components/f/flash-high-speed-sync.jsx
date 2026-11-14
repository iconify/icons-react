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
		"content": `<style>.ngijtlahl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 2.5L9 13h5l-2 8.5l8.5-11H15ZM3 7h5.5m-6 5H6m-2 5h4.5");
}
</style><path class="ngijtlahl"/>`,
		"fallback": "uix-sharp:flash-high-speed-sync",
	});
}

export default Component;

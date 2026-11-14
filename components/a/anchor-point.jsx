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
		"content": `<style>.ueygzebhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5h19V20h-19ZM6.75 8a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0ZM12 13.25v2.25");
}
</style><path class="ueygzebhg"/>`,
		"fallback": "uix-sharp:anchor-point",
	});
}

export default Component;

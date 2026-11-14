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
		"content": `<style>.hya9bwksv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h15v11h-15Zm4-4L10 7l3.5-4m4 9.5H19a1.5 1.5 0 0 1 1.5 1.5v4.5m-1.5 0h3v3h-3Z");
}
</style><path class="hya9bwksv"/>`,
		"fallback": "uix-sharp:cable-tv",
	});
}

export default Component;

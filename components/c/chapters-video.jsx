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
		"content": `<style>.ykpyfpbeh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5L11 7.75L3.5 12ZM2.5 17h19M8.75 14.75v4.5m6.5-4.5v4.5");
}
</style><path class="ykpyfpbeh"/>`,
		"fallback": "uix-sharp:chapters-video",
	});
}

export default Component;

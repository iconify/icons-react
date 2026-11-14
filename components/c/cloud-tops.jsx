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
		"content": `<style>.ba2k07rbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21h13a2.75 2.75 0 0 0 .5-5.5a4 4 0 0 0-7.5-1.5A3.5 3.5 0 0 0 5 15.75A2.75 2.75 0 0 0 5.5 21Zm3-8.75V3M6 5.5L8.5 3L11 5.5M5.5 3h6");
}
</style><path class="ba2k07rbu"/>`,
		"fallback": "uix-sharp:cloud-tops",
	});
}

export default Component;

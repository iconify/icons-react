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
		"content": `<style>.t8bjzqsku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16h19l-2 4h-15ZM4 16v-4.5h5V16m-2-4.5l10.5-8m0 0v7a1.5 1.5 0 0 0 3 0");
}
</style><path class="t8bjzqsku"/>`,
		"fallback": "uix-sharp:floating-crane",
	});
}

export default Component;

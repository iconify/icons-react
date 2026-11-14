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
		"content": `<style>.v1aq32bax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10a2 2 0 0 1 2-2h5l3.5 3.5v8a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2ZM21 3l-7.25 3.5L17 7.75L18 11Zm-4 4.75L21 3M5.5 14H9m-3.5 4H8");
}
</style><path class="v1aq32bax"/>`,
		"fallback": "uix-sharp:document-send",
	});
}

export default Component;

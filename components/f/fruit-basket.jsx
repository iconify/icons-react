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
		"content": `<style>.xbyzuib7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18l-1.75 7c-.25 1-1 1.5-2 1.5H6.75c-1 0-1.75-.5-2-1.5Zm1.5-4a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm8 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}
</style><path class="xbyzuib7z"/>`,
		"fallback": "uix-sharp:fruit-basket",
	});
}

export default Component;

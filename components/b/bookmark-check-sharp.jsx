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
		"content": `<style>.rn28gkqbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 5.25v-2.5h12.5v19.058l-1.6-1.108L12 17.25L7.35 20.7l-1.6 1.108V19.85Zm3.5 2h5.5");
}
</style><path class="rn28gkqbs"/>`,
		"fallback": "iconoven:bookmark-check-sharp",
	});
}

export default Component;

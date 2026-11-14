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
		"content": `<style>.t0vqtbafm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h13.5v19H6ZM4 8h4m-4 8h4m3-8h5m-5 4h3");
}
</style><path class="t0vqtbafm"/>`,
		"fallback": "uix-sharp:book-draft",
	});
}

export default Component;

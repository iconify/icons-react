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
		"content": `<style>.dzm2g_erw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM3 9.5h6.25M5 14.5h4.25");
}
</style><path class="dzm2g_erw"/>`,
		"fallback": "uix-sharp:beta-particle",
	});
}

export default Component;

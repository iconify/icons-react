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
		"content": `<style>.fuy_wpbmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 3.5l6 16H2Zm8.25 13h.01m2.49 0h.01m2.49 0h.01");
}
</style><path class="fuy_wpbmd"/>`,
		"fallback": "uix-sharp:change-data-capture",
	});
}

export default Component;

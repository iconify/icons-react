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
		"content": `<style>.lk2enrbrl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19v15h-19Zm7 5h.01m4.99 0h.01m-5.01 5h.01m4.99 0h.01");
}
</style><path class="lk2enrbrl"/>`,
		"fallback": "uix-sharp:braille-sign",
	});
}

export default Component;

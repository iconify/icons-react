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
		"content": `<style>.znlqbobrt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19v14h-19Zm8 3.75h.01m2.99 0h.01M10.5 12h.01m2.99 0h.01m-3.01 3.25h.01m2.99 0h.01");
}
</style><path class="znlqbobrt"/>`,
		"fallback": "uix-sharp:braille-keyboard",
	});
}

export default Component;

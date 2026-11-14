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
		"content": `<style>.f04uoqbvy {
  d: path("m17.5 6l-1.75 4l2 3l-2.5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywk-lxbmn {
  d: path("M6 6h15.5L18 18H2.5Zm7.75 0l-3.5 12");
}
</style><g class="ulnmmdpxh"><path class="ywk-lxbmn"/><path class="f04uoqbvy"/></g>`,
		"fallback": "uix-sharp:cracked-pavement",
	});
}

export default Component;

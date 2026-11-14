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
		"content": `<style>.f25ej6b8z {
  fill: currentColor;
  d: path("M6 18h12v3H6Z");
}

.md2g9nvaz {
  d: path("m6 15l6-12l6 12m-9.75-4.5h7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="md2g9nvaz"/><path class="f25ej6b8z"/></g>`,
		"fallback": "uix-sharp:highlight-color",
	});
}

export default Component;

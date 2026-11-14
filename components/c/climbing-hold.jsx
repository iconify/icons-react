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
		"content": `<style>.r86o1ru5j {
  d: path("M11 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.sx8u4-bjy {
  d: path("M3 2.5h3v19H3Zm3 4c4-1.5 8.5-1 11.25 1c3.75 2.5 4.25 7 1 9.5C15 19.25 10 18.75 6 17.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sx8u4-bjy"/><path class="r86o1ru5j"/></g>`,
		"fallback": "uix-sharp:climbing-hold",
	});
}

export default Component;

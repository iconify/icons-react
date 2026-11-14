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
		"content": `<style>.lyrseubaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h8v8h-8Zm11 0h8v8h-8Zm-11 11h8v8h-8Zm11 0h8v8h-8Zm-8-7h2m9 0h2m-13 11h2m9 0h2");
}
</style><path class="lyrseubaw"/>`,
		"fallback": "uix-sharp:group-stage",
	});
}

export default Component;

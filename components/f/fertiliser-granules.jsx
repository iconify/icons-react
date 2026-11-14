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
		"content": `<style>.kua4oxbwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.25h19M2.5 16A2.25 2.25 0 1 0 7 16a2.25 2.25 0 1 0-4.5 0Zm7.25 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM17 16a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm7.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><path class="kua4oxbwq"/>`,
		"fallback": "uix-sharp:fertiliser-granules",
	});
}

export default Component;

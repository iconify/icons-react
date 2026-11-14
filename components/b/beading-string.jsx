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
		"content": `<style>.nom2y0b4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM15 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-6.75 9.25l2-2m3.5-3.5l2-2");
}
</style><path class="nom2y0b4w"/>`,
		"fallback": "uix-sharp:beading-string",
	});
}

export default Component;

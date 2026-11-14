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
		"content": `<style>.jolfyzezz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3v5.75l-5 9.75C3.9 19.75 4.6 21 6 21h12c1.4 0 2.1-1.25 1.5-2.5l-5-9.75V3M8 3h8M7 15h10");
}
</style><path class="jolfyzezz"/>`,
		"fallback": "uix-sharp:erlenmeyer-flask",
	});
}

export default Component;

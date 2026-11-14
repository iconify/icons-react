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
		"content": `<style>.ylrb_p1rn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6h16a1.5 1.5 0 0 1 1.5 1.5l-1.5 9a2.5 2.5 0 0 1-2.5 1.5h-11A2.5 2.5 0 0 1 4 16.5l-1.5-9A1.5 1.5 0 0 1 4 6Zm2 3h12M6.5 12h11M7 15h10");
}
</style><path class="ylrb_p1rn"/>`,
		"fallback": "uix-sharp:grille",
	});
}

export default Component;

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
		"content": `<style>.mioogqyzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h8v5h-8ZM13 5a2 7 0 0 1 0 14m3.25-14a2 7 0 0 1 0 14M19.5 5a2 7 0 0 1 0 14m-13-6v5M3 8h7M8 6l2 2l-2 2");
}
</style><path class="mioogqyzu"/>`,
		"fallback": "uix-sharp:electromagnetic-induction",
	});
}

export default Component;

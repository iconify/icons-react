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
		"content": `<style>.fr4_ubcta {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9h14l-1.5 10.5A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5Zm2.25-3.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm6.25-2h4v4h-4Zm-1.5 11h.01");
}
</style><path class="fr4_ubcta"/>`,
		"fallback": "uix-sharp:fruit-cup",
	});
}

export default Component;

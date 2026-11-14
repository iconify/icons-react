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
		"content": `<style>.q9_99sbfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 9.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm1.25 2.75L4 20m.5-15a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM17 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-5.5 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="q9_99sbfv"/>`,
		"fallback": "uix-sharp:bubble-wand",
	});
}

export default Component;

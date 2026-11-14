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
		"content": `<style>.dr4x4ccij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 16.5H2.5v-14h11V12m0 3.9v.3M6 2.5v14m4-14v14m-4-7h4M14 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-2.5-1.25l4-4.75m-1 4.75l-4-4.75");
}
</style><path class="dr4x4ccij"/>`,
		"fallback": "uix-sharp:film-splicer",
	});
}

export default Component;

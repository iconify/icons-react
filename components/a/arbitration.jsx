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
		"content": `<style>.e2r6i1awc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5v17m-3 0h5.3M4.5 5h11m-11 0l-2 5a2 2 0 0 0 4 0Zm11 0l-2 5a2 2 0 0 0 4 0Zm2.189 9.818l4.243 4.243l-2.121 2.121l-4.243-4.243ZM17.75 19l-2.5 2.5");
}
</style><path class="e2r6i1awc"/>`,
		"fallback": "uix-sharp:arbitration",
	});
}

export default Component;

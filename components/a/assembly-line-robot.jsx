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
		"content": `<style>.cj-dibbnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5H7m-2 0v-6m1-3.75l3.5-5M12.25 6L17 8.75m-1.75 2v-2h3.5v2M3 13.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8.5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10 18.5h11.5v3H10Zm4.5-5h5v5h-5Z");
}
</style><path class="cj-dibbnu"/>`,
		"fallback": "uix-sharp:assembly-line-robot",
	});
}

export default Component;

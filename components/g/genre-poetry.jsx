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
		"content": `<style>.u0twtl96g {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_guklbxg {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5m-3-12c-5 .5-7 4.5-6.75 8.25C13.5 12.5 16.5 9.5 16.5 4.5ZM9 14l3.5-3.5");
}
</style><g class="ulnmmdpxh"><path class="u0twtl96g"/><path class="w_guklbxg"/></g>`,
		"fallback": "uix-sharp:genre-poetry",
	});
}

export default Component;

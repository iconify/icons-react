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
		"content": `<style>.j0fun7b1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21V9h5v12m0 0V3.5h6V21m0 0v-9h5v9M11 8h2m-2 4h2m-2 4h2");
}
</style><path class="j0fun7b1s"/>`,
		"fallback": "uix-sharp:cityscape-skyscrapers",
	});
}

export default Component;

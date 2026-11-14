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
		"content": `<style>.mb5jozheu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 3.5h4V21h-4Zm11-3.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 3.5l3 8.5h-6Zm-5.5-6v19m4.25-4.5v4m2.5-4v4");
}
</style><path class="mb5jozheu"/>`,
		"fallback": "uix-sharp:customer-toilets",
	});
}

export default Component;

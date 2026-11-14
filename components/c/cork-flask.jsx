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
		"content": `<style>.jivu0k1gl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 9.75a6 6 0 1 0 4 0V6.5l1-4H9l1 4Zm0-3.25h4");
}
</style><path class="jivu0k1gl"/>`,
		"fallback": "uix-sharp:cork-flask",
	});
}

export default Component;

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
		"content": `<style>.u9x-mmbrt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5h4v14h-4ZM2.5 6C5.5 6 7 8 10 8m-7.5 2c3 0 4.5 2 7.5 2m-7.5 2c3 0 4.5 2 7.5 2m4-8c3 0 4.5 2 7.5 2M14 12c3 0 4.5 2 7.5 2M14 16c3 0 4.5 2 7.5 2");
}
</style><path class="u9x-mmbrt"/>`,
		"fallback": "uix-sharp:cable-bundle",
	});
}

export default Component;

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
		"content": `<style>.cs-ow2bwf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.5c3 3 4.5 5 4.5 8a4.5 4.5 0 0 1-9 0c0-3 1.5-5 4.5-8Zm-4.5-4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="cs-ow2bwf"/>`,
		"fallback": "uix-sharp:electrolyser",
	});
}

export default Component;

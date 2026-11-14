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
		"content": `<style>.wvata750o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 4a7 7 0 1 0 3.25 7.75A5.5 5.5 0 0 1 13 4Zm1.288 15.134l4.596-4.596l2.828 2.828l-4.596 4.596Zm2.298-2.298l2.828 2.828");
}
</style><path class="wvata750o"/>`,
		"fallback": "uix-sharp:dose-night",
	});
}

export default Component;

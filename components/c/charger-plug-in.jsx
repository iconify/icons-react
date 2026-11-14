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
		"content": `<style>.fwe6nsblb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7h12v4a6 6 0 0 1-6 6a6 6 0 0 1-6-6Zm3-4.5V7m6-4.5V7m-3 10v4.5");
}
</style><path class="fwe6nsblb"/>`,
		"fallback": "uix-sharp:charger-plug-in",
	});
}

export default Component;

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
		"content": `<style>.x0rx40bhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 7c-.5-1.75-1.75-2.5-3.25-2.5c-2 0-3.5 1.5-3.5 3.75V15c0 2-1 3.5-2.75 4.5h10M7 12h7");
}
</style><path class="x0rx40bhb"/>`,
		"fallback": "uix-sharp:currency-pound",
	});
}

export default Component;

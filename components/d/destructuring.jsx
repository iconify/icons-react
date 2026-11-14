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
		"content": `<style>.z91ajgz9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5c-2 0-2.5 1-2.5 3v3C5.5 11 4.75 12 3 12c1.75 0 2.5 1 2.5 2.5v3c0 2 .5 3 2.5 3m3-17h4v4h-4Zm5.5 6.5h4v4h-4Zm-5 7h4v4h-4Z");
}
</style><path class="z91ajgz9q"/>`,
		"fallback": "uix-sharp:destructuring",
	});
}

export default Component;

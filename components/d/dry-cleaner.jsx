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
		"content": `<style>.yo_jb-w3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5h17l-2 11h-13Zm3 0c0-4.5 4-5.5 6-3.5c2-1.5 5.5-.5 5 3.5m-8.75 3v5m3.25-5v5m3.25-5v5");
}
</style><path class="yo_jb-w3e"/>`,
		"fallback": "uix-sharp:dry-cleaner",
	});
}

export default Component;

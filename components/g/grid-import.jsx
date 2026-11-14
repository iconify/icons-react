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
		"content": `<style>.e9uc84yur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 21l4-18h3l2.723 16.336M2.5 7h13m-9.75 5.5h6.5m9.5 2.25l-5.5 5.5m0-4.75v4.75H21");
}
</style><path class="e9uc84yur"/>`,
		"fallback": "uix-sharp:grid-import",
	});
}

export default Component;

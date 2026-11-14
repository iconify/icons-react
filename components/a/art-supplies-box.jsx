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
		"content": `<style>.e1x2lg8-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13h18v8.5H3Zm3.5 0V6.5l1.75-3l1.75 3V13M6.5 6.5H10m5.5 6.5V9M14 9h3l-1.5-5.5Z");
}
</style><path class="e1x2lg8-z"/>`,
		"fallback": "uix-sharp:art-supplies-box",
	});
}

export default Component;

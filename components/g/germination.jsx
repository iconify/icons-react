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
		"content": `<style>.hq2taubbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 14.5c-2.75.25-3.75 2-3.75 3.25c0 2 3 3.25 6.5 3.25s6.5-1.25 6.5-3.25c0-1.25-1-3-3.75-3.25M12 18V8.5m0 0C11.5 5 8.5 3.5 5 4c0 3.5 3 5.5 7 4.5Zm0 0c.5-3.5 3.5-5 7-4.5c0 3.5-3 5.5-7 4.5Z");
}
</style><path class="hq2taubbz"/>`,
		"fallback": "uix-sharp:germination",
	});
}

export default Component;

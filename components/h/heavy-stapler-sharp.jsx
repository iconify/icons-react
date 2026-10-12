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
		"content": `<style>.og0k6xbaf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.24 8.31l13.52-2.12L19 6l1 .75l1 .75v4H3v-3zM19.5 11.5V15M3 15h18v4H3z");
}
</style><path class="og0k6xbaf"/>`,
		"fallback": "iconoven:heavy-stapler-sharp",
	});
}

export default Component;

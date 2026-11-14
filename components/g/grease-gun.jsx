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
		"content": `<style>.i22_eobya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.5h11v7H6ZM3 10h3v4H3Zm6-1.5v-3h5m3 6.5h1.5a2.5 2.5 0 0 1 2.5 2.5V19");
}
</style><path class="i22_eobya"/>`,
		"fallback": "uix-sharp:grease-gun",
	});
}

export default Component;

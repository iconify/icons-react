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
		"content": `<style>.plv9d2b7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h2q2 2 4 0h2l-1 7.5c3 1.5 5.5 5.5 6 10H3c.5-4.5 3-8.5 6-10Zm1 7.5h6l-3 7.25Z");
}
</style><path class="plv9d2b7a"/>`,
		"fallback": "uix-sharp:dirndl-style-dress",
	});
}

export default Component;

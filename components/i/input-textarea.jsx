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
		"content": `<style>.pqzls-bqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18v17H3ZM6.5 8h11m-11 3.5h11M6.5 15H11m7 .75L15.75 18");
}
</style><path class="pqzls-bqd"/>`,
		"fallback": "uix-sharp:input-textarea",
	});
}

export default Component;

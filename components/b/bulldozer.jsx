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
		"content": `<style>.m9s6mlb5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm2 0v-4.5h8V15M6 10.5V5h4l1 5.5m8.5-.5h2v11h-2Zm-6 2.25h6");
}
</style><path class="m9s6mlb5s"/>`,
		"fallback": "uix-sharp:bulldozer",
	});
}

export default Component;

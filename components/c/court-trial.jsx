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
		"content": `<style>.jon4r_bih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.404 9.768l6.364-6.364l2.828 2.828l-6.364 6.364ZM9.5 9.5l5 5M4 17.5h16V21H4Z");
}
</style><path class="jon4r_bih"/>`,
		"fallback": "uix-sharp:court-trial",
	});
}

export default Component;

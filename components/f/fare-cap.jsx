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
		"content": `<style>.c04yr_fzf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8V4h18v4M5 10h14v3.25a2 2 0 0 0 0 4v3.25H5v-3.25a2 2 0 0 0 0-4Zm5 5.25h4");
}
</style><path class="c04yr_fzf"/>`,
		"fallback": "uix-sharp:fare-cap",
	});
}

export default Component;

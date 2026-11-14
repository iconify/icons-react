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
		"content": `<style>.ls_nabb7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12H5v9.5H2.5ZM19 12h2.5v9.5H19ZM5 13.75h14m-14 6h14M12 2.5c1.5 2 3.25 3.25 3.25 5.25a3.25 3.25 0 0 1-6.5 0c0-1.25.75-2.25 1.5-2.75c.25 1 .75 1.5 1.25 1.75c-.25-1.5 0-3 .5-4.25Z");
}
</style><path class="ls_nabb7b"/>`,
		"fallback": "uix-sharp:gas-pipe-yellow",
	});
}

export default Component;

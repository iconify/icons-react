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
		"content": `<style>.dh7ovxbbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5v14H2.75zm0 10.5h18.5M10 17.25l-.75 3.5h5.5l-.75-3.5Z");
}
</style><path class="dh7ovxbbc"/>`,
		"fallback": "iconoven:all-in-one-pc-sharp",
	});
}

export default Component;

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
		"content": `<style>.koxajwb7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3c2.25 3 6 7.1 6 10.75a6 6 0 0 1-12 0C6 10.1 9.75 6 12 3Zm0 8.25v5m-2.5-2.5h5");
}
</style><path class="koxajwb7q"/>`,
		"fallback": "iconoven:blood-drop-plus-sharp",
	});
}

export default Component;

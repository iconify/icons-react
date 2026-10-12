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
		"content": `<style>.jdgulnsgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 20.25l4.75-16l4.75 16m-7.75-5.5h6M15 4.25v16m0-3a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><path class="jdgulnsgt"/>`,
		"fallback": "iconoven:alphabet-sharp",
	});
}

export default Component;

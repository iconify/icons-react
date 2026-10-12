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
		"content": `<style>.a6daw4b1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 6.25h11.5v11.5H6.25Zm-1.5-3.5h14.5v3.5H4.75zm0 15h14.5v3.5H4.75zm4-8.75h6.5m-6.5 2.75h6.5m-6.5 2.75h4");
}
</style><path class="a6daw4b1d"/>`,
		"fallback": "iconoven:constitution-sharp",
	});
}

export default Component;

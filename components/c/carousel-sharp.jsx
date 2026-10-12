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
		"content": `<style>.vprd0kbww {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 4.25h8.5v15.5h-8.5zm-5 3h2v9.5h-2m18.5-9.5h-2v9.5h2");
}
</style><path class="vprd0kbww"/>`,
		"fallback": "iconoven:carousel-sharp",
	});
}

export default Component;

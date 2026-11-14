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
		"content": `<style>.uhm7qxbtn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.75h11.5v5H4Zm11.2 10H3v-5h13.75v4.45m-4.6 6.3H2.5v-5.75h12.7M18 15v6m-3-3h6");
}
</style><path class="uhm7qxbtn"/>`,
		"fallback": "uix-sharp:book-stack-plus",
	});
}

export default Component;

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
		"content": `<style>.h5zy7xh3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 2.75h2.5v4.5a2.5 2.5 0 0 1-5 0v-4.5zm-8 11.5h2.5v4.5a2.5 2.5 0 0 1-5 0v-4.5zM7.25 4L9 2.75v7m6.25 5.75L17 14.25v7");
}
</style><path class="h5zy7xh3v"/>`,
		"fallback": "iconoven:binary-sharp",
	});
}

export default Component;

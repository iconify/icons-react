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
		"content": `<style>.vd7nyjbte {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 2.75h5.5V11l4 4a2.83 2.83 0 0 1-4 4l-5-5l-1.006-.9l.006-1.35v-9h1ZM6.25 6h6.5");
}
</style><path class="vd7nyjbte"/>`,
		"fallback": "iconoven:baby-booties-sharp",
	});
}

export default Component;

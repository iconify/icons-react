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
		"content": `<style>.ki7khyb9p {
  d: path("M10 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.mrqfz7z1w {
  d: path("M4.5 13h15c0 5-3.5 8-7.5 8s-7.5-3-7.5-8Zm0 0L12 6l7.5 7M12 2.5V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mrqfz7z1w"/><path class="ki7khyb9p"/></g>`,
		"fallback": "uix-sharp:hanging-basket",
	});
}

export default Component;

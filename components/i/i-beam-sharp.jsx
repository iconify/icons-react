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
		"content": `<style>.k7ujrobog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.75H20V7h-5.5v10H20v3.25H4V17h5.5V7H4V3.75zM12 9.5v5");
}
</style><path class="k7ujrobog"/>`,
		"fallback": "iconoven:i-beam-sharp",
	});
}

export default Component;

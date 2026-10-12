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
		"content": `<style>.k3yuydact {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9.5a6 6 0 0 1 12 0ZM7.5 13h10l-.55.83l-4.4 6.59l-.55.83l-.55-.83l-4.4-6.59L6.5 13z");
}
</style><path class="k3yuydact"/>`,
		"fallback": "iconoven:ice-cream-cone-sharp",
	});
}

export default Component;

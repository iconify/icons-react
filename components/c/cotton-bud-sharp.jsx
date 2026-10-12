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
		"content": `<style>.lvwniohca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 8l8 8M7.75 7.75a2.9 1.75 45 1 0-4.1-4.1a2.9 1.75 45 1 0 4.1 4.1Zm12.6 12.6a2.9 1.75 45 1 0-4.1-4.1a2.9 1.75 45 1 0 4.1 4.1Z");
}
</style><path class="lvwniohca"/>`,
		"fallback": "iconoven:cotton-bud-sharp",
	});
}

export default Component;

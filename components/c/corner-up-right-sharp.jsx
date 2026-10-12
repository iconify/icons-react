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
		"content": `<style>.ft6epebfu {
  d: path("m15.5 13l3.75-3.75L15.5 5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xgu99_cfi {
  d: path("M4.25 19.75V9.25h15");
}
</style><g class="x2cwu0gfd"><path class="xgu99_cfi"/><path class="ft6epebfu"/></g>`,
		"fallback": "iconoven:corner-up-right-sharp",
	});
}

export default Component;

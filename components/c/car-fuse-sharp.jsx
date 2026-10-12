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
		"content": `<style>.bi03qtb5r {
  d: path("M7.5 9.75h3l3-2.5h3M6 13h3v6H6zm9 0h3v6h-3z");
}

.tode6-bmt {
  d: path("M3.5 4h17v9h-17z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tode6-bmt"/><path class="bi03qtb5r"/></g>`,
		"fallback": "iconoven:car-fuse-sharp",
	});
}

export default Component;

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
		"content": `<style>.gb5ngdcjv {
  d: path("M8.5 13L4.75 9.25L8.5 5.5");
}

.lho0jaber {
  d: path("M19.75 19.75V9.25h-15");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="lho0jaber"/><path class="gb5ngdcjv"/></g>`,
		"fallback": "iconoven:corner-up-left-sharp",
	});
}

export default Component;

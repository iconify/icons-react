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
		"content": `<style>.i1nywkjmg {
  d: path("M3.75 4.75h16.5v16.5H3.75zm0 5.25h16.5M8 2.75v4m8-4v4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yvsd53hxb {
  d: path("M9 18.25V13h6l-1.5 1.75L15 16.5H9");
}
</style><g class="x2cwu0gfd"><path class="i1nywkjmg"/><path class="yvsd53hxb"/></g>`,
		"fallback": "iconoven:due-date-sharp",
	});
}

export default Component;

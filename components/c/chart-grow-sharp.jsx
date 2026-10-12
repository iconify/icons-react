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
		"content": `<style>.szim-38ur {
  d: path("M14.25 2.75h4.5v4.5");
}

.vizpxnt7h {
  d: path("M3.75 16.25h3.5v4h-3.5zm6.5-3h3.5v7h-3.5zm6.5-3h3.5v10h-3.5zm-13 1.5l5.5-5.5l3 3l6.5-6.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vizpxnt7h"/><path class="szim-38ur"/></g>`,
		"fallback": "iconoven:chart-grow-sharp",
	});
}

export default Component;

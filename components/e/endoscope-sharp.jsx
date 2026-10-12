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
		"content": `<style>.khbna04ud {
  cx: 19px;
  cy: 6px;
  r: 2px;
}

.mcr0q08vy {
  d: path("M2.75 13.5h5v7.75h-5zm2.5 0C5.5 8.5 10 5.75 17 6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mcr0q08vy"/><circle class="khbna04ud"/></g>`,
		"fallback": "iconoven:endoscope-sharp",
	});
}

export default Component;

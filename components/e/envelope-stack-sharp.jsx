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
		"content": `<style>.aythsibbt {
  d: path("m2.75 9.5l8 5.5l8-5.5");
}

.bzyq96a0l {
  d: path("M6 8.5V5h15.25v13h-2.5");
}

.lxmg7qbbl {
  d: path("M2.75 8.5h16v12.75h-16z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bzyq96a0l"/><path class="lxmg7qbbl"/><path class="aythsibbt"/></g>`,
		"fallback": "iconoven:envelope-stack-sharp",
	});
}

export default Component;

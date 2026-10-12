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
		"content": `<style>.q7xtx_x3w {
  cx: 12px;
  cy: 17.5px;
  r: 1.5px;
}

.qt4afwy9g {
  d: path("M6.5 12h11");
}

.wertabc3z {
  cx: 12px;
  cy: 6.5px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qt4afwy9g"/><circle class="wertabc3z"/><circle class="q7xtx_x3w"/></g>`,
		"fallback": "iconoven:divide-sign-sharp",
	});
}

export default Component;

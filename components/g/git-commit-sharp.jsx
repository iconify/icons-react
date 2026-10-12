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
		"content": `<style>.qy4e2ebar {
  cx: 12px;
  cy: 12px;
  r: 4.25px;
}

.wmmvndbva {
  d: path("M2.75 12h3.5m11.5 0h3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="qy4e2ebar"/><path class="wmmvndbva"/></g>`,
		"fallback": "iconoven:git-commit-sharp",
	});
}

export default Component;

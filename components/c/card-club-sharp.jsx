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
		"content": `<style>.h7xvndbeo {
  d: path("m10.25 17.25l.79-3.24a2.4 2.4 0 1 1-.87-3.56a2.4 2.4 0 1 1 3.66 0a2.4 2.4 0 1 1-.87 3.56l.79 3.24Z");
}

.ohxdrbbbi {
  d: path("M3.75 2.75h16.5v18.5H3.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ohxdrbbbi"/><path class="h7xvndbeo"/></g>`,
		"fallback": "iconoven:card-club-sharp",
	});
}

export default Component;

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
		"content": `<style>.gjxnp4b8z {
  d: path("M19.5 7.25v6M4 18.5h16M6.5 16L4 18.5L6.5 21m11-5l2.5 2.5l-2.5 2.5");
}

.t45nmnboy {
  cx: 16.5px;
  cy: 10.25px;
  r: 3px;
}

.tym_h1bsl {
  d: path("m3 13.25l4-9.5l4 9.5M4.4 10h5.2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tym_h1bsl"/><circle class="t45nmnboy"/><path class="gjxnp4b8z"/></g>`,
		"fallback": "iconoven:case-toggle-sharp",
	});
}

export default Component;

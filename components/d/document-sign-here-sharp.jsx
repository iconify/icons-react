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
		"content": `<style>.fxipxrb3q {
  d: path("M13.75 2.75v5.5h5.5m-11 3.5h5m-5 5.75c.75-2 1.75-3.25 2.5-2.5s-.5 2.5.5 2.5s1.25-1.5 2-1.5s.5 1 1.5 1H16");
}

.rh2140hgr {
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="fxipxrb3q"/></g>`,
		"fallback": "iconoven:document-sign-here-sharp",
	});
}

export default Component;

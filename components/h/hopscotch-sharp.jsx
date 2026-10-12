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
		"content": `<style>.lgks9xbtl {
  cx: 19px;
  cy: 4.25px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7883_i1a {
  d: path("M9 21.25h6m-6 0v-3.5m6 3.5v-3.5m-9 0h12m-12-3.5h12m-12 3.5v-3.5m12 3.5v-3.5m-6 3.5v-3.5m-3 0v-3.5m6 3.5v-3.5m-9 0h12M6 7.25h12m-12 3.5v-3.5m12 3.5v-3.5m-6 3.5v-3.5m-3 0a3 3 0 0 1 6 0");
}
</style><g class="x2cwu0gfd"><path class="z7883_i1a"/><circle class="lgks9xbtl"/></g>`,
		"fallback": "iconoven:hopscotch-sharp",
	});
}

export default Component;

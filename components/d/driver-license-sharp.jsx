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
		"content": `<style>.p23wiew8n {
  d: path("M15.75 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm-3 3h6");
}

.rk_nsx0ok {
  d: path("M2.75 5.25h18.5v13.5H2.75zM6 10h4.25M6 14h2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rk_nsx0ok"/><path class="p23wiew8n"/></g>`,
		"fallback": "iconoven:driver-license-sharp",
	});
}

export default Component;

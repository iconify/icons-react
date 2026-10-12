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
		"content": `<style>.dx6306lcu {
  cx: 12px;
  cy: 13.75px;
  r: 1.6px;
}

.tn-e9xbej {
  d: path("M14.17 4.9a2.5 2.5 0 1 1-4.34 0m8.75 15.15a2.5 2.5 0 1 1 2.17-3.75m-17.5 0a2.5 2.5 0 1 1 2.17 3.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tn-e9xbej"/><circle class="dx6306lcu"/></g>`,
		"fallback": "iconoven:biohazard-sharp",
	});
}

export default Component;

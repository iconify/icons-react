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
		"content": `<style>.a1ceeac6c {
  d: path("M6.25 2.75h11.5v18.5H6.25zm4 4.5h3.5");
}

.gmf9qrbcd {
  cx: 12px;
  cy: 14.75px;
  r: 2.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="a1ceeac6c"/><circle class="gmf9qrbcd"/></g>`,
		"fallback": "iconoven:doorbell-sharp",
	});
}

export default Component;

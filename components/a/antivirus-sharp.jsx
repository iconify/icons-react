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
		"content": `<style>.ojns-rv_m {
  d: path("M12 6.5V3.75m0 13.75v2.75M6.5 12H3.75m13.75 0h2.75M8.11 8.11L6.17 6.17m9.72 9.72l1.94 1.94m-1.94-9.72l1.94-1.94m-9.72 9.72l-1.94 1.94M10 10l4 4m0-4l-4 4");
}

.pfpt48slt {
  cx: 12px;
  cy: 12px;
  r: 5.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="pfpt48slt"/><path class="ojns-rv_m"/></g>`,
		"fallback": "iconoven:antivirus-sharp",
	});
}

export default Component;

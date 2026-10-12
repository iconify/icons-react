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
		"content": `<style>.h9w27gbpu {
  cx: 6.75px;
  cy: 7px;
  r: 2.75px;
}

.r5bwuzb_o {
  d: path("M2.75 21.25v-3.5C5.5 15.5 8.25 14.5 11 14.5c4 0 6.5 2.5 10.25 3v3.75ZM15.5 15V8m0 4.5h-2.75V10m2.75 1h2.75V9");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="r5bwuzb_o"/><circle class="h9w27gbpu"/></g>`,
		"fallback": "iconoven:desert-sharp",
	});
}

export default Component;

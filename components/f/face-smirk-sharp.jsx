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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.e_h0dm-vc {
  d: path("M7.75 10h2.5m3.5 0h2.5m-2.5-2.75L15 6.417L16.25 7m-7 8.5l3.213.93l2.287-1.93");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="e_h0dm-vc"/></g>`,
		"fallback": "iconoven:face-smirk-sharp",
	});
}

export default Component;

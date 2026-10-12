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

.ila1y1b7j {
  d: path("M2.75 12c4.5 2.25 14 2.25 18.5 0a9.25 9.25 0 0 1-18.5 0Z");
}

.twpk6rb8u {
  d: path("M4.22 7c4.5 2 11.06 2 15.56 0M12 2.75c-2.5 2.5-3.75 5.6-3.75 10.4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="ila1y1b7j"/><path class="twpk6rb8u"/></g>`,
		"fallback": "iconoven:hemisphere-sharp",
	});
}

export default Component;

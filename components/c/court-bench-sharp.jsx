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
		"content": `<style>.e9-7-8-2z {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
}

.syvzvbbcz {
  d: path("M8.5 10.25a3.5 3.5 0 0 1 7 0Zm-5.75 0h18.5v2.5H2.75zm1.5 2.5h15.5v8.5H4.25zm3.75 4h8");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="e9-7-8-2z"/><path class="syvzvbbcz"/></g>`,
		"fallback": "iconoven:court-bench-sharp",
	});
}

export default Component;

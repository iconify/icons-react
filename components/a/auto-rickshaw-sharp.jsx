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
		"content": `<style>.c5_xrjbae {
  d: path("M20.5 14.5V4.25h-13l-.75 2l-1.25 4H3.25v4.25Z");
}

.dmb4gdc-s {
  cx: 17.5px;
  cy: 19.25px;
  r: 1.75px;
}

.e3ijufb_j {
  cx: 5.5px;
  cy: 19.25px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="c5_xrjbae"/><circle class="e3ijufb_j"/><circle class="dmb4gdc-s"/></g>`,
		"fallback": "iconoven:auto-rickshaw-sharp",
	});
}

export default Component;

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
		"content": `<style>.peiq2hfxm {
  cx: 12px;
  cy: 12px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1g8afaup {
  d: path("M7 12H2.75a9.25 9.25 0 0 1 4.63-8.01L9.5 7.67A5 5 0 0 0 7 12Zm7.5-4.33l2.13-3.68A9.25 9.25 0 0 1 21.25 12H17a5 5 0 0 0-2.5-4.33Zm0 8.66l2.13 3.68a9.25 9.25 0 0 1-9.25 0l2.12-3.68a5 5 0 0 0 5 0Z");
}
</style><g class="x2cwu0gfd"><path class="y1g8afaup"/><circle class="peiq2hfxm"/></g>`,
		"fallback": "iconoven:hazard-radiation-sharp",
	});
}

export default Component;

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
		"content": `<style>.opyybkahz {
  cx: 8.5px;
  cy: 15.5px;
  r: 5.75px;
}

.twyvl_bqq {
  d: path("m6.6 16.15l1.75 1.75m4.22-6.47l5.28-5.28m1.93-2.64l.71.71l.53.53l-.53.53l-1.41 1.41l-.53.53l-.53-.53l-.71-.71l-.53-.53l.53-.53l1.41-1.41l.53-.53z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="opyybkahz"/><path class="twyvl_bqq"/></g>`,
		"fallback": "iconoven:banjo-sharp",
	});
}

export default Component;

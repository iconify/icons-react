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
		"content": `<style>.t4fk_4l6u {
  d: path("M2.75 20.25a6.25 6.25 0 0 1 12.5 0v1H2.75zm12.5-10.5h6v11.5h-6zm2 3.25h2m-2 3h2");
}

.w8khh1fqt {
  cx: 9px;
  cy: 7px;
  r: 3.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="w8khh1fqt"/><path class="t4fk_4l6u"/></g>`,
		"fallback": "iconoven:customs-broker-sharp",
	});
}

export default Component;

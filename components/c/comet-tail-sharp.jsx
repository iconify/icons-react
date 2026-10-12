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
		"content": `<style>.d2s9n8aor {
  cx: 7px;
  cy: 17px;
  r: 4.25px;
}

.esb5bcyio {
  d: path("M10.75 13.25c2.75-3.5 6-7.5 10.5-10.5m-9 14.5c3.25-1.5 6.25-4.25 8.75-8M6.75 11.5C8 8.25 10 5.25 13 3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="d2s9n8aor"/><path class="esb5bcyio"/></g>`,
		"fallback": "iconoven:comet-tail-sharp",
	});
}

export default Component;

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
		"content": `<style>.k-bx946ur {
  cx: 18px;
  cy: 16.25px;
  r: 3.25px;
}

.mqpf50xaw {
  d: path("M6 16.25L9 10h7m2 6.25l-2.75-9h2.25M9 10l3.5 6.25H6M9 10l.5-2.75m-1.25 0h2.5m6.75-.5c.25-2.25 1.25-3.25 3.5-3.5c-.25 2.25-1.25 3.25-3.5 3.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdhqn2b4q {
  cx: 6px;
  cy: 16.25px;
  r: 3.25px;
}
</style><g class="x2cwu0gfd"><circle class="xdhqn2b4q"/><circle class="k-bx946ur"/><path class="mqpf50xaw"/></g>`,
		"fallback": "iconoven:bike-commute-sharp",
	});
}

export default Component;

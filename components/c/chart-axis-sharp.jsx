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
		"content": `<style>.ijcbndbsu {
  d: path("M5.75 2.75v15.5h15.5M3.5 5l2.25-2.25L8 5m11 11l2.25 2.25L19 20.5m-8.25-2.25v3m5-3v3m-13-12.5h3m-3 4.5h3");
}

.s7r9jey2r {
  cx: 13.5px;
  cy: 10.25px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ijcbndbsu"/><circle class="s7r9jey2r"/></g>`,
		"fallback": "iconoven:chart-axis-sharp",
	});
}

export default Component;

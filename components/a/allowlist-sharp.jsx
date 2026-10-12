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
		"content": `<style>.gkuwju8jy {
  d: path("m15 17l1.5 1.5l2.75-3");
}

.r49ernf5s {
  d: path("M2.75 4.5h18.5m-18.5 5h18.5m-18.5 5h6.5m-6.5 5h6.5");
}

.upu83lbfh {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="r49ernf5s"/><circle class="upu83lbfh"/><path class="gkuwju8jy"/></g>`,
		"fallback": "iconoven:allowlist-sharp",
	});
}

export default Component;

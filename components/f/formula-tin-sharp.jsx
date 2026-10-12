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
		"content": `<style>.fmpif9znc {
  d: path("M4.5 11h15M8 14h8v4.25H8Z");
}

.ss51tqb1w {
  d: path("M14.5 4H11M4.5 7.5h15v13.75h-15z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zxt2az7as {
  cx: 15.75px;
  cy: 4px;
  r: 1.25px;
}
</style><g class="x2cwu0gfd"><circle class="zxt2az7as"/><path class="ss51tqb1w"/><path class="fmpif9znc"/></g>`,
		"fallback": "iconoven:formula-tin-sharp",
	});
}

export default Component;

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
		"content": `<style>.d8mt2_n-r {
  cx: 12px;
  cy: 12px;
  r: 6.25px;
}

.e38n76osi {
  d: path("M9.25 15.25a2.75 2.75 0 0 1 5.5 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y3j0g38tz {
  d: path("M12 2.75a9.25 9.25 0 1 1 0 18.5a9.25 9.25 0 0 1 0-18.5Z");
}

.ybj6vw61j {
  cx: 12px;
  cy: 10.5px;
  r: 1.9px;
}
</style><g class="x2cwu0gfd"><circle class="d8mt2_n-r"/><circle class="ybj6vw61j"/><path class="e38n76osi"/><path class="y3j0g38tz"/></g>`,
		"fallback": "iconoven:avatar-wizard-sharp",
	});
}

export default Component;

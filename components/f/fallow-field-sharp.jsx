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
		"content": `<style>.b2w08rr8v {
  d: path("m3.06 20.51l3.63-8.77L7 11h10l.31.74l3.63 8.77l.31.74H2.75zm5.94.74L10.5 11M15 21.25L13.5 11");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgosk9b6o {
  cx: 17.75px;
  cy: 5.25px;
  r: 2.5px;
}
</style><g class="x2cwu0gfd"><circle class="zgosk9b6o"/><path class="b2w08rr8v"/></g>`,
		"fallback": "iconoven:fallow-field-sharp",
	});
}

export default Component;

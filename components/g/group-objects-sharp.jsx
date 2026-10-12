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
		"content": `<style>.a_0vr5b0m {
  d: path("M2.75 6.5V2.75H6.5m11 0h3.75V6.5m0 11v3.75H17.5m-11 0H2.75V17.5m3.5-11.25h5.5v5.5h-5.5z");
}

.ux15onb8l {
  cx: 15.5px;
  cy: 15.5px;
  r: 2.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="a_0vr5b0m"/><circle class="ux15onb8l"/></g>`,
		"fallback": "iconoven:group-objects-sharp",
	});
}

export default Component;

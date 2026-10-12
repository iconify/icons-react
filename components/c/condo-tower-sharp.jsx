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
		"content": `<style>.lisbm3b7a {
  d: path("M6.5 20.35V7.5l.7-.56l1.1-.88l.7-.56V2.75h6V5.5l.7.56l1.1.88l.7.56v13.75h-11zM9.75 9.5v7m2.25-7v7m2.25-7v7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf6acx20s {
  d: path("M10.5 21.25v-2.5h3v2.5");
}
</style><g class="x2cwu0gfd"><path class="lisbm3b7a"/><path class="zf6acx20s"/></g>`,
		"fallback": "iconoven:condo-tower-sharp",
	});
}

export default Component;

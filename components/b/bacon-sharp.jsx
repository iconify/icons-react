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
		"content": `<style>.jirvy6b8s {
  d: path("M2.75 8.75c2.08-2 4.17-2 6.25 0s4.17 2 6.25 0s4-2 6 0v7q-3-3-6 0c-3 3-4.17 2-6.25 0s-4.17-2-6.25 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysui_wbpi {
  d: path("m6 11l1.481-.444L9 12.15c2.08 2 4.17 2 6.25 0l1.425-1.425l1.425.225");
}
</style><g class="x2cwu0gfd"><path class="jirvy6b8s"/><path class="ysui_wbpi"/></g>`,
		"fallback": "iconoven:bacon-sharp",
	});
}

export default Component;

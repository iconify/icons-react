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
		"content": `<style>.jbhk_vbwl {
  d: path("m2.75 13.25l2.6-7.4l.625-1.619l1.735.019h8.58l1.735-.019l.625 1.619l2.6 7.4v7H2.75v-2.5Z");
}

.nw-pemb9z {
  d: path("M2.75 13.25h4.4l1.1 2.2l.4.8h6.7l.4-.8l1.1-2.2h4.4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="jbhk_vbwl"/><path class="nw-pemb9z"/></g>`,
		"fallback": "iconoven:inbox-sharp",
	});
}

export default Component;

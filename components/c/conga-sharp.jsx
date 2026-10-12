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
		"content": `<style>.fg99au89b {
  d: path("M6.5 5.25a5.5 2.25 0 1 0 11 0a5.5 2.25 0 1 0-11 0Z");
}

.os5b7vyns {
  d: path("M6.5 5.25c-.5 4 .25 7.25 1.75 10.5L9 20.5l.1.75h5.8l.1-.75l.75-4.75c1.5-3.25 2.25-6.5 1.75-10.5a5.5 2.25 0 0 1-11 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="os5b7vyns"/><path class="fg99au89b"/></g>`,
		"fallback": "iconoven:conga-sharp",
	});
}

export default Component;

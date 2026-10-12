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
		"content": `<style>.lr-mb1b-m {
  d: path("M14.75 2.75v4.5h4.5m-11 3.5h7.5M8.25 14h3.5m0 3L13 18.25l2.75-3");
}

.rihmi4c3a {
  d: path("M7.25 2.75h7.5l4.5 4.5v14H4.75V2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rihmi4c3a"/><path class="lr-mb1b-m"/></g>`,
		"fallback": "iconoven:exam-paper-sharp",
	});
}

export default Component;

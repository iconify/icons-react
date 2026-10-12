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
		"content": `<style>.e9-7-8-2z {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
}

.s8jjmj-ir {
  d: path("M6.25 9.25h11.5a5.75 5.75 0 0 1-11.5 0ZM12 15v3.5m-4.25 2.75c0-1.75 1.75-2.75 4.25-2.75s4.25 1 4.25 2.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="e9-7-8-2z"/><path class="s8jjmj-ir"/></g>`,
		"fallback": "iconoven:chalice-cup-sharp",
	});
}

export default Component;

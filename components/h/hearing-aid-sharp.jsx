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
		"content": `<style>.f1da7cc2z {
  d: path("M15.75 3a3.5 3.5 0 0 1 3.5 3.5c0 4.25-1.5 8.5-4.5 8.5l-2.632-.121L13.25 12.5c1-2 1-3.75.25-5.5a2.75 2.75 0 0 1 2.25-4Z");
}

.myi7s5bkj {
  d: path("M13.25 5C9 4.75 7.25 8.25 8 13.25");
}

.s-ijl8b-g {
  cx: 8px;
  cy: 15px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="f1da7cc2z"/><path class="myi7s5bkj"/><circle class="s-ijl8b-g"/></g>`,
		"fallback": "iconoven:hearing-aid-sharp",
	});
}

export default Component;

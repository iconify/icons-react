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
		"content": `<style>.etm8-mbct {
  d: path("m10 17l1.5 1.5l3-3m2.15-12.43l.94.34l.47.17l-.17.47l-.52 1.41l-.17.47l.47.17l.94.35l.47.17l-.17.47l-.51 1.41l-.17.47l-.47-.17l-4.7-1.72l-.47-.17l.17-.47l.51-1.41l.17-.47l.47.17l.94.35l.47.17l.17-.47l.52-1.41l.17-.47z");
}

.pava-dbkv {
  d: path("M4.75 12.25h14.5v9H4.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pava-dbkv"/><path class="etm8-mbct"/></g>`,
		"fallback": "iconoven:customs-stamp-sharp",
	});
}

export default Component;

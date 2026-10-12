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
		"content": `<style>.kr3nqqjwv {
  d: path("M2.75 2.75h18.5v18.5H2.75zm9.25 0v18.5");
}

.wgqz0rmnm {
  d: path("M5.75 5.75H9v8H5.75Zm9.25 0h3.25v8H15Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kr3nqqjwv"/><path class="wgqz0rmnm"/></g>`,
		"fallback": "iconoven:french-doors-sharp",
	});
}

export default Component;

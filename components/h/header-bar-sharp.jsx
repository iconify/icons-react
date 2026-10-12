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
		"content": `<style>.pw7p-85ys {
  d: path("M2.75 3.75h18.5v16.5H2.75z");
}

.qse5aebkv {
  d: path("M5.25 3.75h16V9H2.75V3.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pw7p-85ys"/><path class="qse5aebkv"/></g>`,
		"fallback": "iconoven:header-bar-sharp",
	});
}

export default Component;

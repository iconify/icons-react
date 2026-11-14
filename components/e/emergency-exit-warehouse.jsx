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
		"content": `<style>.bts7pnzsx {
  d: path("M4 3.5h16v17H4Z");
}

.srbsu5zqp {
  d: path("M8.5 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM7 17l3-6l3 3h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bts7pnzsx"/><path class="srbsu5zqp"/></g>`,
		"fallback": "uix-sharp:emergency-exit-warehouse",
	});
}

export default Component;

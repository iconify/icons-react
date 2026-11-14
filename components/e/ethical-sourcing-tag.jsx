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
		"content": `<style>.rf0d8zbkq {
  d: path("M3.5 3.5h8l9 9l-8 8l-9-9Z");
}

.tt06w_b3h {
  d: path("M6.25 7.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm2.5 5l2.75 2.75l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rf0d8zbkq"/><path class="tt06w_b3h"/></g>`,
		"fallback": "uix-sharp:ethical-sourcing-tag",
	});
}

export default Component;

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
		"content": `<style>.b4nij9bdd {
  d: path("M5.5 8H13l-1.5 3H7Zm.5 5.75h6.5L14 21.5H4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.veqkwccgz {
  d: path("M4 8V4.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17H4M4 8h13m0 0v13.5");
}
</style><g class="ulnmmdpxh"><path class="veqkwccgz"/><path class="b4nij9bdd"/></g>`,
		"fallback": "uix-sharp:coffee-maker",
	});
}

export default Component;

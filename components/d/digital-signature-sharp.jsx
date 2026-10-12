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
		"content": `<style>.nq0kijqfy {
  d: path("M7 7h6.5M7 10h6.5m-6.75 6.5c.9-1.9 1.9-1.9 2.2 0s1.4 1.9 2.3 0m9.58-8.42l-1.16-1.16l-.42-.42l-.42.42l-5.16 5.16l-.42.42l-.16.58l-.43 1.59l-.16.58l.58-.16l1.59-.43l.58-.16l.42-.42l5.16-5.16l.42-.42z");
}

.q35lc_b5v {
  d: path("M3.75 2.75h13v18.5h-13z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="q35lc_b5v"/><path class="nq0kijqfy"/></g>`,
		"fallback": "iconoven:digital-signature-sharp",
	});
}

export default Component;

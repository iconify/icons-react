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
		"content": `<style>.nmhvddcyu {
  d: path("M2.75 2.75h14.5v18.5H2.75zM6.5 7.5h7m-7 3.5h7m-7 3.5h3");
}

.q7qnnfbeo {
  d: path("m18.25 9l1.238-.999l2.25 2.25l-1.238.999l-6.5 6.5l-3 .75l.75-3Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nmhvddcyu"/><path class="q7qnnfbeo"/></g>`,
		"fallback": "iconoven:draft-post-sharp",
	});
}

export default Component;

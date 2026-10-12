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
		"content": `<style>.e408uacwa {
  d: path("M2.75 6.25h18.5v11.5H2.75z");
}

.geui7dbst {
  d: path("m7.25 13.25l2.25-4.5l2.25 4.5M8 11.75h3m2.25 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3-1.5v3m-9 2h9");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e408uacwa"/><path class="geui7dbst"/></g>`,
		"fallback": "iconoven:button-shapes-sharp",
	});
}

export default Component;

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
		"content": `<style>.f7ev2z_cy {
  d: path("M12.75 12.75L11 15.5h2.25l-1.75 2.75");
}

.i61-edgzu {
  d: path("M3.75 13v-1h1.6L7 7.15l.438-1.394L8.9 5.75h6.2l1.462.006L17 7.15L18.65 12h1.6v7H3.75v-1Zm2.75 6v2m11-2v2m-12-9h13");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="i61-edgzu"/><path class="f7ev2z_cy"/></g>`,
		"fallback": "iconoven:electric-car-sharp",
	});
}

export default Component;

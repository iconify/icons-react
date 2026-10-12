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
		"content": `<style>.l4rz0smqz {
  d: path("M15.25 11H17a2.5 2.5 0 0 1 0 5h-1.9M7.75 2.75L6.67 3.83L7.75 5l1.038 1.125L7.75 7.25m3.5-4.5l-1.08 1.08L11.25 5l1.038 1.125L11.25 7.25");
}

.wc1yxsb3w {
  d: path("M3.75 9.75h11.5v5.75A5.25 5.25 0 0 1 10 20.75H9a5.25 5.25 0 0 1-5.25-5.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wc1yxsb3w"/><path class="l4rz0smqz"/></g>`,
		"fallback": "iconoven:iced-coffee-sharp",
	});
}

export default Component;

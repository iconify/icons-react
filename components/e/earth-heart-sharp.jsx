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
		"content": `<style>.j0aukbb1m {
  d: path("M12 7.5c-2.25 4-2.25 9 0 13M3.25 12h17.5");
}

.th46htbkx {
  d: path("M12 20.5c-6-4-9.25-7.25-9.25-11.5A4.75 4.75 0 0 1 12 7.5A4.75 4.75 0 0 1 21.25 9c0 4.25-3.25 7.5-9.25 11.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="th46htbkx"/><path class="j0aukbb1m"/></g>`,
		"fallback": "iconoven:earth-heart-sharp",
	});
}

export default Component;

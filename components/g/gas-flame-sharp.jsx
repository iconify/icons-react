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
		"content": `<style>.q5_-_4ekq {
  d: path("M12 10.5c1 1.25 2 2.25 2 3.75a2 2 0 0 1-4 0c0-1.5 1-2.5 2-3.75ZM5.75 21.25h12.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xycbcac8g {
  d: path("M12 2.75c2.5 3 5.75 6 5.75 10.5a5.75 5.75 0 0 1-11.5 0c0-4.5 3.25-7.5 5.75-10.5Z");
}
</style><g class="x2cwu0gfd"><path class="xycbcac8g"/><path class="q5_-_4ekq"/></g>`,
		"fallback": "iconoven:gas-flame-sharp",
	});
}

export default Component;

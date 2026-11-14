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
		"content": `<style>.ey9s5ab8y {
  d: path("m3 9l4-5h10l4 5l-9 10.5Zm0 0h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwni876fg {
  d: path("M8.5 9L12 4l3.5 5m-7 0L12 19.5L15.5 9");
}
</style><g class="ulnmmdpxh"><path class="ey9s5ab8y"/><path class="uwni876fg"/></g>`,
		"fallback": "uix-sharp:account-premium",
	});
}

export default Component;

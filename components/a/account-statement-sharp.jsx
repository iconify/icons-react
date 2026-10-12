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
		"content": `<style>.mqkg9kykg {
  d: path("M4.25 2.75h15.5v18.5H4.25z");
}

.tgulksb_j {
  d: path("m8 8.25l4-2.5l4 2.5Zm-.25 3.25h8.5m-8.5 3h8.5m-8.5 3h5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mqkg9kykg"/><path class="tgulksb_j"/></g>`,
		"fallback": "iconoven:account-statement-sharp",
	});
}

export default Component;

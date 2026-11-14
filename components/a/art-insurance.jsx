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
		"content": `<style>.m5_p7dbbg {
  d: path("M7.75 18.75L11 15l2.5 2.75l1.25-1.25l1.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yhjw8svuc {
  d: path("M3 9.25a9 6.75 0 0 1 18 0a3.5 3.5 0 0 0-6 0a3.5 3.5 0 0 0-6 0a3.5 3.5 0 0 0-6 0ZM5 12h14v9.5H5Z");
}
</style><g class="ulnmmdpxh"><path class="yhjw8svuc"/><path class="m5_p7dbbg"/></g>`,
		"fallback": "uix-sharp:art-insurance",
	});
}

export default Component;

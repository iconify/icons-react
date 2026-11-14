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
		"content": `<style>.rg8vv8bhj {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM9 10h.01M15 10h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xt1_hsb9h {
  d: path("M7.5 13.5h9c0 2.5-2 4.25-4.5 4.25S7.5 16 7.5 13.5Z");
}
</style><g class="ulnmmdpxh"><path class="rg8vv8bhj"/><path class="xt1_hsb9h"/></g>`,
		"fallback": "uix-sharp:emoji-grin",
	});
}

export default Component;

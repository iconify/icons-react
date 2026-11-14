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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v9-iq30mt {
  d: path("M3.5 7.5h17l-2 8.5h-13Z");
}

.z84lqybbb {
  d: path("M5.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM4.5 7.5a3 3 0 0 1 6 0m3 0a3 3 0 0 1 6 0");
}
</style><g class="ulnmmdpxh"><path class="v9-iq30mt"/><path class="z84lqybbb"/></g>`,
		"fallback": "uix-sharp:ball-cart",
	});
}

export default Component;

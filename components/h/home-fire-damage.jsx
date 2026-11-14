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
		"content": `<style>.ke58ybbzd {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w2kv5etxg {
  d: path("M12 20c-1.5 0-2.5-1-2.5-2.5s1.5-2 1.75-3.5c.75.5 1 1.25 1 2c.75-.25 1.25-.75 1.25-1.5c.75 1 1 2 1 3c0 1.5-1 2.5-2.5 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="ke58ybbzd"/><path class="w2kv5etxg"/></g>`,
		"fallback": "uix-sharp:home-fire-damage",
	});
}

export default Component;

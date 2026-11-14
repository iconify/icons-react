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

.pelqrrbgd {
  d: path("M12.75 9L9 14h3l-.75 3.75L15 12.5h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ke58ybbzd"/><path class="pelqrrbgd"/></g>`,
		"fallback": "uix-sharp:home-energy",
	});
}

export default Component;

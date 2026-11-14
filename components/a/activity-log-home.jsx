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

.zsuh2sbbu {
  d: path("M7.5 10.25h9v8h-9ZM10 13h4m-4 2.75h2.75");
}
</style><g class="ulnmmdpxh"><path class="ke58ybbzd"/><path class="zsuh2sbbu"/></g>`,
		"fallback": "uix-sharp:activity-log-home",
	});
}

export default Component;

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
		"content": `<style>.fx3gz59vk {
  d: path("M3.5 21C7 14 12 6.5 20 4.5m0 0c1 4 .5 7.5-1.5 10");
}

.r_f4pfmky {
  d: path("M16.75 17a1.75 2.5 0 1 0 3.5 0a1.75 2.5 0 1 0-3.5 0ZM5 15.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fx3gz59vk"/><path class="r_f4pfmky"/></g>`,
		"fallback": "uix-sharp:angler-casting",
	});
}

export default Component;

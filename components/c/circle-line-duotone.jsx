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
		"content": `<style>.avrp7fi8r {
  stroke-linecap: round;
  d: path("M19.0711 4.929C17.2614 3.119 14.7614 2 12 2C6.4772 2 2 6.477 2 12C2 14.761 3.1193 17.261 4.9289 19.071");
}

.jx0p4fbya {
  fill: none;
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zb2kedx8a {
  d: path("M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="jx0p4fbya"><path class="zb2kedx8a"/><path class="avrp7fi8r"/></g>`,
		"fallback": "solar:circle-line-duotone",
	});
}

export default Component;

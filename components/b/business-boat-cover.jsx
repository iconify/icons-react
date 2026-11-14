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
		"content": `<style>.olul_lb3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.358 15.5h13.284a1.307 1.307 0 0 1 1.108 2l-.736 1.177a1.75 1.75 0 0 1-1.484.823H6.47a1.75 1.75 0 0 1-1.484-.823L4.25 17.5a1.307 1.307 0 0 1 1.108-2M12 2.75V15.5m-2-6.75v2.75A1.5 1.5 0 0 1 8.5 13H7.25a1.496 1.496 0 0 1-1.256-2.309l1.697-2.623A1.255 1.255 0 0 1 10 8.75m8-5.5l3 1.25v2.25c0 1.75-1.25 2.75-3 3.5c-1.75-.75-3-1.75-3-3.5V4.5Z");
}
</style><path class="olul_lb3d"/>`,
		"fallback": "uix:business-boat-cover",
	});
}

export default Component;

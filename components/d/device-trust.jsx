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
		"content": `<style>.o3vjyib-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 14.5H4v-11h16v9.1M2.5 18h9.7m5.8-3.25L21 16v2.25c0 1.75-1.25 2.75-3 3.5c-1.75-.75-3-1.75-3-3.5V16Z");
}
</style><path class="o3vjyib-m"/>`,
		"fallback": "uix-sharp:device-trust",
	});
}

export default Component;

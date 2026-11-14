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
		"content": `<style>.m3_epdbgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 14.5H2.5v-12H18v7.7m-8.75 4.3v5m-2.75 0h5.75M15 13h7v9h-7Zm0 4.5h7");
}
</style><path class="m3_epdbgl"/>`,
		"fallback": "uix-sharp:dev-server",
	});
}

export default Component;

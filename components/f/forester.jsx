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
		"content": `<style>.sn3kjfxmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.5 2.5l5 7H11l3.5 6.5h-12L6 9.5H3.5Zm0 13.5v5.5m11.5 0L16 7m0 .5l5-2V11l-4.25-1Z");
}
</style><path class="sn3kjfxmn"/>`,
		"fallback": "uix-sharp:forester",
	});
}

export default Component;

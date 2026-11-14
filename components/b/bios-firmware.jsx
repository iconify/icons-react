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
		"content": `<style>.nb9ddwc8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.6 15H4.5V4.5H15v10.1M8 2.5v2m3.5-2v2M2.5 8h2m-2 3.5h2M8 15v2.5m3.5-2.5v2.5M15 8h2.5M15 11.5h2.5m.5 3v7m-3-3l3 3l3-3");
}
</style><path class="nb9ddwc8k"/>`,
		"fallback": "uix-sharp:bios-firmware",
	});
}

export default Component;

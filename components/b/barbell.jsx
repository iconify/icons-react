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
		"content": `<style>.dmt_sdbxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5h2.5v14H3Zm2.5 0H8v14H5.5ZM8 12h8m0-7h2.5v14H16Zm2.5 0H21v14h-2.5Z");
}
</style><path class="dmt_sdbxc"/>`,
		"fallback": "uix-sharp:barbell",
	});
}

export default Component;

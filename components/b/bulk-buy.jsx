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
		"content": `<style>.i0rjpd2vg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h6.75v6.5H3.75Zm9.5 0H20v6.5h-6.75ZM3.75 12h6.75v6.5H3.75Zm9.5 0H20v6.5h-6.75ZM2.5 18.5h19M5 18.5v3m14-3v3");
}
</style><path class="i0rjpd2vg"/>`,
		"fallback": "uix-sharp:bulk-buy",
	});
}

export default Component;

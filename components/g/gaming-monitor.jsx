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
		"content": `<style>.y2gdn_s4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.9 14H2.5V2.5h19v10.1M9.5 14v4.5m-3.5 0h4.7m5.05-3.5h3.75a2.25 2.25 0 0 1 2.25 2.25V21l-2.25-1.5h-3.75L13.5 21v-3.75A2.25 2.25 0 0 1 15.75 15Zm-.25 2.5H17m2.5 0h.01");
}
</style><path class="y2gdn_s4o"/>`,
		"fallback": "uix-sharp:gaming-monitor",
	});
}

export default Component;

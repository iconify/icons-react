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
		"content": `<style>.igrblkbpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.4 4.5H20V16h-.1m-4.3 3.5H7.5V16H4V7.9m9.25.1v1.3M16 8v2M3.5 3.5l17 17");
}
</style><path class="igrblkbpz"/>`,
		"fallback": "uix-sharp:ethernet-off",
	});
}

export default Component;

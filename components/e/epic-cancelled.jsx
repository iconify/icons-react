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
		"content": `<style>.rtpmlhdjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.413 14.692L16.25 9.5h-6.5l1.5-7l-8.5 10h6.5L7.75 21l3.949-5.343M15.5 15.5l5 5m0-5l-5 5");
}
</style><path class="rtpmlhdjf"/>`,
		"fallback": "uix-sharp:epic-cancelled",
	});
}

export default Component;

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
		"content": `<style>.n9if3zbcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.595 19.5H2.5l9-16.5l5.028 9.218M11.5 9v4m0 3.25h.01M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="n9if3zbcp"/>`,
		"fallback": "uix-sharp:alert-escalation",
	});
}

export default Component;

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
		"content": `<style>.r-di6v1lc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 18.5a4.5 4.5 0 0 1 0-9a6 6 0 0 1 11 0a4.5 4.5 0 0 1 0 9ZM5 14h14m-7-4.5V14m-3.5 0v4.5m7-4.5v4.5");
}
</style><path class="r-di6v1lc"/>`,
		"fallback": "uix:firewall-cloud",
	});
}

export default Component;

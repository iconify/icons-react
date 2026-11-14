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
		"content": `<style>.q6f5wdbum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 3.5v6.5m-3 6.5l3-6.5l3 6.5m-3-11.5l4 3m-4-3l-4-1M3 3l4 4l-2.5 1.5l4 4");
}
</style><path class="q6f5wdbum"/>`,
		"fallback": "uix:electric-shock",
	});
}

export default Component;

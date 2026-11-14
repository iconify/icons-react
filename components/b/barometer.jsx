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
		"content": `<style>.wgvj04j6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m2.75 0h1.5m.5-4.75l1 1m3.75-3v1.5m4.75.5l-1 1m3 3.75h-1.5M12 14l2-4m-2 7h.01");
}
</style><path class="wgvj04j6f"/>`,
		"fallback": "uix:barometer",
	});
}

export default Component;

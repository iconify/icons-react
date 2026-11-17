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
		"content": `<style>.ovn7l04yb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3c.5 2.5 2 4.5 4 6q.391.392.695.83M10 20.916A6 6 0 0 1 3 15c0-1.5.5-2.5 1-3m0 0a2 2 0 1 0 4 0c0-1.5-.5-2-1-3c-1-2-.5-4 2-6m8 18c-1.5-1-3-3-3-5a3 3 0 0 1 6 0c0 2-1.5 4-3 5m0-5h.01");
}
</style><path class="ovn7l04yb"/>`,
		"fallback": "coolicons:flame-map-pin-corner-sharp",
	});
}

export default Component;
